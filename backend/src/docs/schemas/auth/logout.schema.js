module.exports = {
  AuthErrorResponse: {
    type: 'object',
    properties: {
      code: {
        type: 'string',
        example: 'AUTH_ERROR'
      },
      message: {
        type: 'string',
        example: 'Sessão não encontrada'
      }
    }
  }
};
