module.exports = {
  '/auth/registerCustomer': {
    post: {
      tags: ['Auth'],
      summary: 'Registro de cliente',
      description:
        'Cria um novo cliente, inicia uma sessão e retorna o accessToken. ' +
        'O refreshToken e o sessionId são armazenados em cookie httpOnly.',

      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/RegisterCustomerRequest'
            }
          }
        }
      },

      responses: {
        201: {
          description: 'Cliente registrado com sucesso',
          headers: {
            'Set-Cookie': {
              description:
                'Cookie de sessão contendo sessionId.refreshToken (HttpOnly)',
              schema: {
                type: 'string',
                example:
                  'session=uuid.refreshToken; HttpOnly; Path=/; SameSite=Lax'
              }
            }
          },
          content: {
            'application/json': {
              schema: {
                $ref:
                  '#/components/schemas/RegisterCustomerSuccessResponse'
              }
            }
          }
        },

        422: {
          description: 'Erro de validação',
          content: {
            'application/json': {
              schema: {
                $ref:
                  '#/components/schemas/ValidationErrorResponse'
              },
              examples: require('../../examples/auth/auth.example')
            }
          }
        }
      }
    }
  },
};
