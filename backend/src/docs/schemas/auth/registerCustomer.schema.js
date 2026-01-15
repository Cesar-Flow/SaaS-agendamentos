module.exports = {
  RegisterCustomerRequest: {
    type: 'object',
    required: ['email', 'name', 'password'],
    properties: {
      email: {
        type: 'string',
        example: 'cliente1@email.com'
      },
      name: {
        type: 'string',
        example: 'João Silva'
      },
      password: {
        type: 'string',
        example: '123456'
      },
      phone: {
        type: 'string',
        example: '+5511999999999'
      },
      notes: {
        type: 'string',
        example: 'Cliente VIP'
      }
    }
  },

  RegisterCustomerSuccessResponse: {
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
  }
};
