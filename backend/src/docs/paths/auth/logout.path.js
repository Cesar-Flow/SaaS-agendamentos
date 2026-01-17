module.exports = {
  '/auth/logout': {
    post: {
      tags: ['Auth'],
      summary: 'Logout do usuário',
      description: `
Encerra a sessão do usuário autenticado.

A autenticação é feita exclusivamente via cookie \`session\`.
No sucesso, o cookie é removido e nenhum conteúdo é retornado.
      `,
      security: [
        {
          cookieAuth: []
        }
      ],
      responses: {
        204: {
          description: 'Logout realizado com sucesso'
        },
        401: {
          description: 'Sessão não encontrada ou inválida',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/AuthErrorResponse'
              },
            }
          }
        }
      }
    }
  }
};
