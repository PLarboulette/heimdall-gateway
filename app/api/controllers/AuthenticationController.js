/**
 * Created by pierre on 15/04/16.
 */


// Imports
var AuthenticationService = require('./../services/AuthenticationService');

// Exports
exports.login = _login;
exports.logout = _logout;


// Private
function _login(user, callback) {
    AuthenticationService.login(user,callback);
}

function _logout(req, res, callback) {
    // TODO
}