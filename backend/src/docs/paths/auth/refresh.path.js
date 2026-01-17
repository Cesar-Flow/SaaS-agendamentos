const examples = require('../../examples/auth/refresh.example');

module.exports = {
  '/auth/refresh': {
    post: {
      tags: ['Auth'],
      summary: 'Renova o access token',
      description:
        'Gera um novo access token a partir da sessão armazenada em cookie HttpOnly.',

      security: [
        {
          bearerCookie: []
        }
      ],

      responses: {
        200: {
          description: 'Access token renovado com sucesso',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/RefreshSuccess'
              },
              examples: {
                success: {
                  value: examples.success
                }
              }
            }
          }
        },

        401: {
          description: 'Sessão não encontrada ou inválida',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/RefreshUnauthorized'
              },
              examples: {
                sessionNotFound: {
                  value: examples.sessionNotFound
                }
              }
            }
          }
        }
      }
    }
  }
  
};
