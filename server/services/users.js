var User = require('../db/models/user');
var config = require('../config.json');
var fs = require('fs');
var path = require('path');

const jwt = require('jsonwebtoken');



function saveUser(newUser, callback) {
  const nUser = new User({
    email: newUser.email,
    password: newUser.password
  });

  User.find((err, users) => {
    if (err) return console.error(err);

    if (users.some(u => u.email === newUser.email)) return callback('Email do not free');
    nUser.save((err, user) => {
      if (err) {
        callback('Server error');
      }
      var token = jwt.sign({ id: user._id }, config.auth.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      callback(user);
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
    console.log(user);
    let token = jwt.sign(user, config.auth.secret, {
      expiresIn: 1440 // expires in 1 hour
    });
    callback({ ...user, error: false, token: token });
  })
}

function getUserById(id, callback) {
  if (!id || id == "")
    return callback('Invalid Id.');
  user.findById(id)
    .populate('recruiters.recruiter', 'uid')
    .lean()
    .exec(function (err, user) {
      if (user) {
        delete user.__v;
        return callback(user);
      }
    });
}

function updUserInfo(data, callback) {
  getUserById(data._id, (user) => {
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
        return callback(user);
      });
    } else {
      return callback('User not found.');
    }
  });

  return callback(user);
}

Object.assign(module.exports, {
  saveUser: saveUser,
  authUser: authUser,
  getById: getUserById,
  updUserInfo: updUserInfo,
});