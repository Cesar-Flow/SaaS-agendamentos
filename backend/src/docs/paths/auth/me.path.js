module.exports = {
  '/auth/me': {
    get: {
      tags: ['Auth'],
      summary: 'Dados do usuário autenticado',
      description:
        'Retorna os dados do usuário autenticado com base na sessão armazenada em cookie httpOnly. ' +
        'Caso a sessão seja válida, um novo accessToken é retornado.',

      security: [
        {
          cookieAuth: []
        }
      ],

      responses: {
        200: {
          description: 'Sessão válida',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/MeSuccessResponse'
              }
            }
          }
        },

        401: {
          description: 'Sessão ausente ou inválida',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/AuthErrorResponse'
              },
              examples: require('../../examples/auth/me.example')
            }
          }
        }
      }
    }
  }
};
