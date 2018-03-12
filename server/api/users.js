var userService = require('../services/users');
var path = require('path');
var config = require('../config.json');
var http = require('http');
var fs = require('fs');

function save(eq, res, next) {
  var user = eq.body;
  userService.saveUser(user, (e) => {
    res.send(e);
  });
}

function getUser(eq, res, next) {
  var user = eq.body;
  userService.getUser(user, (e) => {
    res.send(e);
  });
}

function authUser(eq, res, next) {
  var user = eq.body;
  userService.authUser(user, (e) => {
    res.send(e);
  });
}

function updInfo(eq, res, next) {
  var data = eq.body;
  userService.updUserInfo(data, (e) => {
    res.send(e);
  });
}

module.exports = {
  save: save,
  authUser: authUser,
  updInfo: updInfo,
}