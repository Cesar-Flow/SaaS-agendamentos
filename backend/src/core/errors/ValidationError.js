const AppError = require('./AppError');

class ValidationError extends AppError {
  constructor(message = 'Dados inválidos', details = null) {
    super(message, 422, 'VALIDATION_ERROR', details);
  }
}

module.exports = ValidationError;
