var userService = require('../services/users');
var path = require('path');
var config = require('../config.json');
var http = require('http');
var fs = require('fs');

function save(eq, res, next) {
  var user = eq.body;
  user.headers = eq.headers;
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

function authByToken(eq, res, next) {
  var data = eq.body;
  userService.authByToken(data, (e) => {
    res.send(e);
  });
}

module.exports = {
  save: save,
  authUser: authUser,
  updInfo: updInfo,
  authByToken: authByToken,
}