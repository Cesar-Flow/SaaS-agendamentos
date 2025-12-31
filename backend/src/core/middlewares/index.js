const ensureAuthenticated = require('./ensureAuthenticated');
const errorHandler = require('./errorHandler');
const validateRegister = require('./validateRegister');
const validateLogin = require('./validateLogin');

module.exports = {
    ensureAuthenticated,
    errorHandler,
    validateRegister,
    validateLogin,
};