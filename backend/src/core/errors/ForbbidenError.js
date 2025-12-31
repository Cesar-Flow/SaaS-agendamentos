const AppError = require('./AppError');

class ForbiddenError extends AppError {
  constructor(message = 'Acesso não permitido', details = null) {
    super(message, 403, 'FORBIDDEN_ERROR', details);
  }
}

module.exports = ForbiddenError;
