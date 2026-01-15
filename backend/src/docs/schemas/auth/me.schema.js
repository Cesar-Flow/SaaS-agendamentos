module.exports = {
  MeSuccessResponse: {
    type: 'object',
    properties: {
      accessToken: {
        type: 'string',
        description: 'Novo JWT para autenticação via Authorization header',
        example:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
      },
      user: {
        $ref: '#/components/schemas/User'
      }
    }
  }
};
