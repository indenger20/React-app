var User = require('../db/models/user');
var config = require('../config.json');

function getUsers(str, id, callback) {
    User.find((err, users) => {
        if (err) return console.error(err);
        const res = users.filter(u => {
            if (str) {
                return  u.name.toUpperCase().indexOf(str.toUpperCase()) > -1 && u.id !== id;
            }
            return u.id !== id;
        });
        callback(res);

    });
};

module.exports = {
    getUsers: getUsers,
}