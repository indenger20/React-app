var userService = require('../services/users');
var path = require('path');
var config = require('../config.json');
var http = require('http');
var fs = require('fs');

module.exports.save = function (eq, res, next) {
  var user = eq.body;
  userService.saveUser(user, (e) => {
    res.send(e);
  });
}

module.exports.getUser = function (eq, res, next) {
  var user = eq.body;
  userService.getUser(user, (e) => {
    res.send(e);
  });
}