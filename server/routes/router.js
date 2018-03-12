const path = require('path');
const fs = require('fs');
const express = require('express');
const router = express.Router();
var usersAPI = require('../api/users');
var config = require('../config.json');



module.exports.configure = function (app) {

    // users routes
    app.post('/api/signup', usersAPI.save);
    app.post('/api/signin', usersAPI.authUser);
    app.post('/api/updInfo', usersAPI.updInfo);

};