const path = require('path');
const fs = require('fs');
const express = require('express');
const router = express.Router();
var usersAPI = require('../api/users');
var config = require('../config.json');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');


const authCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        // YOUR-AUTH0-DOMAIN name e.g prosper.auth0.com
        jwksUri: "https://{YOUR-AUTH0-DOMAIN}/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: '{YOUR-API-AUDIENCE-ATTRIBUTE}',
    issuer: '{YOUR-AUTH0-DOMAIN}',
    algorithms: ['RS256']
});


module.exports.configure = function (app) {

    // users routes
    app.post('/api/signup', usersAPI.save);
    // app.post('/api/signin', usersAPI.save);

};