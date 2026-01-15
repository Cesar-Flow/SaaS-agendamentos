module.exports = {
  ValidationErrorResponse: {
    type: 'object',
    properties: {
      code: {
        type: 'string',
        example: 'VALIDATION_ERROR'
      },
      message: {
        type: 'string',
        example: 'O campo email é obrigatório'
      }
    }
  }
};
