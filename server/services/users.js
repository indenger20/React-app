var user = require('../db/models/user');
var config = require('../config.json');
var fs = require('fs');
var path = require('path');


function saveUser(newUser, callback) {
  const User = new user();
  User.email = newUser.email;
  User.password = newUser.password;

  user.find((err, users) => {
    if (err) return console.error(err);

    if (users.some(u => u.email === newUser.email)) return callback('Email do not free');
    User.save((err, user) => {
      if (err) {
        callback('Server error');
      }
      callback(user);
    });

  });
};



Object.assign(module.exports, {
  saveUser: saveUser,
});