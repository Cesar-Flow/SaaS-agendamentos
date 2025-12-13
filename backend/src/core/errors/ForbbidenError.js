const AppError = require("./AppError");

class ForbiddenError extends AppError {
    constructor(message = "Acesso negado") {
        super(message, 403, "FORBIDDEN");
    }
}

module.exports = ForbiddenError;
