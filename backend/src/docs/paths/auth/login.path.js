module.exports = {
  '/auth/login': {
    post: {
      tags: ['Auth'],
      summary: 'Login do usuário',
      description:
        'Autentica um usuário existente usando email e password. ' +
        'Cria uma sessão e retorna o accessToken. ' +
        'O refreshToken e o sessionId são armazenados em cookie httpOnly.',

      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/LoginRequest'
            }
          }
        }
      },

      responses: {
        201: {
          description: 'Login realizado com sucesso',
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
                $ref: '#/components/schemas/LoginSuccessResponse'
              }
            }
          }
        },

        422: {
          description: 'Erro de validação ou autenticação',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/AuthErrorResponse'
              },
              examples: require('../../examples/auth/login.example')
            }
          }
        }
      }
    }
  }
};
