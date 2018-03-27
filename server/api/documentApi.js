
var userService = require('../services/documentService');
function getUsers(eq, res, next) {
    const { str, id } = eq.body;
    userService.getUsers(str, id, (e) => {
        res.send(e);
    });
}

module.exports = {
    getUsers: getUsers,
}