var user = require('../db/models/user');
var config = require('../config.json');
var fs = require('fs');
var path = require('path');


function saveUser(newUser, callback) {
  const User = new user();
  User.email = newUser.identifier;
  User.password = newUser.password;

  User.save((err, user) => {
    if (err) {
      callback('error');
    }
    callback(user)
  });
};



Object.assign(module.exports, {
  saveUser: saveUser,
});