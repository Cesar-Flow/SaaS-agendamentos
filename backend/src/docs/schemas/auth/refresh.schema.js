module.exports = {
  RefreshSuccess: {
    type: 'object',
    properties: {
      success: {
        type: 'boolean',
        example: true
      },
      accessToken: {
        type: 'string',
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
      }
    }
  },

  RefreshUnauthorized: {
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
