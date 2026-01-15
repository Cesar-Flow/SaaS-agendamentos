module.exports = {
  LoginRequest: {
    type: 'object',
    required: ['email', 'password'],
    properties: {
      email: {
        type: 'string',
        format: 'email',
        example: 'cliente1@email.com',
        description:
          'Email do usuário. Espaços em branco no início e fim são removidos automaticamente.'
      },
      password: {
        type: 'string',
        example: '123456'
      }
    }
  },

  LoginSuccessResponse: {
    type: 'object',
    properties: {
      success: {
        type: 'boolean',
        example: true
      },
      accessToken: {
        type: 'string',
        example:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
      },
      user: {
        $ref: '#/components/schemas/User'
      }
    }
  },

  AuthErrorResponse: {
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
