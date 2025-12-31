const AppError = require('./AppError');

class MapperError extends AppError {
  constructor(message = 'Erro ao mapear dados', details = null) {
    super(message, 500, 'MAPPER_ERROR', details);
  }
}

module.exports = MapperError;
