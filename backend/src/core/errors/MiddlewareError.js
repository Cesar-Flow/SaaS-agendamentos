const AppError = require('./AppError');

class MiddlewareError extends AppError {
  constructor(message = 'Erro no middleware', details = null) {
    super(message, 500, 'MIDDLEWARE_ERROR', details);
  }
}

module.exports = MiddlewareError;
