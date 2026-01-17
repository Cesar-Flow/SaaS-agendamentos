module.exports = {
  loginSuccess: {
    summary: 'Login realizado com sucesso',
    value: {
      success: true,
      accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      user: {
        id: 1,
        name: 'João Silva',
        email: 'cliente1@email.com',
        role: {
          id: 1,
          name: 'CUSTOMER',
          description: 'Usuário final do sistema'
        }
      }
    }
  },

  emailRequired: {
    summary: 'Email obrigatório',
    value: {
      code: 'VALIDATION_ERROR',
      message: 'O campo email é obrigatório'
    }
  },

  passwordRequired: {
    summary: 'Password obrigatório',
    value: {
      code: 'VALIDATION_ERROR',
      message: 'O campo password é obrigatório'
    }
  },

  invalidEmail: {
    summary: 'Email inválido',
    value: {
      code: 'VALIDATION_ERROR',
      message: 'Email inválido'
    }
  },

  invalidCredentialsEmail: {
    summary: 'Email inexistente',
    value: {
      code: 'AUTH_ERROR',
      message: 'Email ou senha inválidos'
    }
  },

  invalidCredentialsPassword: {
    summary: 'Senha incorreta',
    value: {
      code: 'AUTH_ERROR',
      message: 'Email ou senha inválidos'
    }
  },

  emptyBody: {
    summary: 'Corpo da requisição vazio',
    value: {
      code: 'VALIDATION_ERROR',
      message: 'Corpo da requisição vazio'
    }
  }
};
