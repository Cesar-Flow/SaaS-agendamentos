module.exports = {
  User: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
        example: 1
      },
      name: {
        type: 'string',
        example: 'João Silva'
      },
      email: {
        type: 'string',
        example: 'cliente1@email.com'
      },
      role: {
        $ref: '#/components/schemas/Role'
      }
    }
  }
};
