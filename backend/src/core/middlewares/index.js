const ensureAuthenticated = require('./ensureAuthenticated');
const errorHandler = require('./errorHandler');
const validateRegister = require('./validateRegister');
const generalValidator = require('./generalValidator');
const validateLogin = require('./validateLogin');
const roleValidator = require('./roleValidator');

module.exports = {
    ensureAuthenticated,
    errorHandler,
    generalValidator,
    validateRegister,
    validateLogin,
    roleValidator,
};