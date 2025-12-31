const AppError = require('./AppError');

class AuthError extends AppError {
  constructor(message = 'Não autenticado', details = null) {
    super(message, 401, 'AUTH_ERROR', details);
  }
}

module.exports = AuthError;
