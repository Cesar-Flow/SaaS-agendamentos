const AppError = require("./AppError");

class AuthError extends AppError {
    constructor(message = "Não autorizado") {
        super(message, 401, "AUTH_ERROR");
    }
}

module.exports = AuthError;