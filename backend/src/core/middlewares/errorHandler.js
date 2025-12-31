const { AppError } = require('@errors');

module.exports = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      code: err.code,
      message: err.message,
      ...(err.details && { details: err.details }),
    });
  }

  console.error(err);

  return res.status(500).json({
    code: 'INTERNAL_SERVER_ERROR',
    message: 'Erro interno do servidor',
  });
};
