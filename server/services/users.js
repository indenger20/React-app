var User = require('../db/models/user');
var config = require('../config.json');
var fs = require('fs');
var path = require('path');

const jwt = require('jsonwebtoken');

function removeCredential(user) {
  delete user.password;
  return user;
}

function returnInfor(user) {
  return {
    email: user.email,
    name: user.name,
    token: user.token,
    status: user.status,
    description: user.description,
  }
}


function saveUser(newUser, callback) {
  var token = jwt.sign({
    auth: 'magic',
    agent: newUser.headers['user-agent'],
    exp: 1440 // expires in 1 hour
  }, config.auth.secret);
  const nUser = new User({
    email: newUser.email,
    password: newUser.password,
    token: token,
  });

  User.find((err, users) => {
    if (err) return console.error(err);

    if (users.some(u => u.email === newUser.email)) return callback('Email do not free');
    
    nUser.save((err, user) => {
      if (err) {
        callback('Server error');
      }
      return callback(returnInfor(user));
    });

  });
};

function authUser(user, callback) {
  let data = {
    email: user.email,
    password: user.password
  };
  User.findOne(data).lean().exec(function (err, user) {
    if (err) {
      return callback({ error: true });
    }
    if (!user) {
      return callback({ 'message': 'User not found!' });
    }
    let token = jwt.sign(user, config.auth.secret, {
      expiresIn: 1440 // expires in 1 hour
    });
    user.token = token;
    user.save(function (err, user) {
      callback(returnInfor(user));
    })
  })
}

function getUserById(id, callback) {
  if (!id || id == "")
    return callback('Invalid Id.');
  User.findById(id)
    .exec(function (err, user) {
      if (user) {
        delete user.__v;
        return callback(user);
      }
    });
}

function updUserInfo(data, callback) {
  getUserById(data._id, (user, err) => {
    if (err) {
      return callback(err);
    }
    if (user) {
      user.name = data.name;
      user.description = data.description;
      user.status = data.status;
      user.save(function (err, user) {
        if (err) {
          return callback(err, user);
        }
        callback(returnInfor(removeCredential(user)));
      });
    } else {
      return callback('User not found.');
    }
  });
}

function authByToken(data, callback) {
  getUserById(data._id, (user, err) => {
    if (err) {
      return callback(err);
    }
    if (user) {
      if (user.token === data.token) {
        return callback(returnInfor(user));
      } else {
        return callback(null);
      }
    }
  });
}

Object.assign(module.exports, {
  saveUser: saveUser,
  authUser: authUser,
  getById: getUserById,
  updUserInfo: updUserInfo,
  authByToken: authByToken,
});