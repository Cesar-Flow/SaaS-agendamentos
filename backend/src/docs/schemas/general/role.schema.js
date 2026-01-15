module.exports = {
  Role: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
        example: 1
      },
      name: {
        type: 'string',
        example: 'CUSTOMER'
      },
      description: {
        type: 'string',
        example: 'Usuário final do sistema'
      }
    }
  }
};
