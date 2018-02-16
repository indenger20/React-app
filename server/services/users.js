var user = require('../db/models/user');
var config = require('../config.json');
var fs = require('fs');
var path = require('path');

const notError = {
  text: 'email not free'
}

function saveUser(newUser, callback) {
  const User = new user();
  User.email = newUser.identifier;
  User.password = newUser.password;

  user.find((err, users) => {
    if (err) return console.error(err);

    if (users.some(u => u.email === newUser.email)) return notError;
    User.save((err, user) => {
      if (err) {
        callback('error');
      }
      callback(user)
    });
  })
};



Object.assign(module.exports, {
  saveUser: saveUser,
});