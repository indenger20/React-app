module.exports.configure = function () {
    const mongoose = require('mongoose');
    const config = require('../config.json').mongoDB;

    mongoose.Promise = global.Promise;
    mongoose.connect(config.uri, config.connectOptions);
};