module.exports = {
  emailRequired: {
    summary: 'Email obrigatório',
    value: {
      code: 'VALIDATION_ERROR',
      message: 'O campo email é obrigatório'
    }
  },
  nameRequired: {
    summary: 'Name obrigatório',
    value: {
      code: 'VALIDATION_ERROR',
      message: 'O campo name é obrigatório'
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
  userAlreadyExists: {
    summary: 'Usuário já existente',
    value: {
      code: 'VALIDATION_ERROR',
      message: 'Usuário já existente'
    }
  },
  emptyBody: {
    summary: 'Body vazio',
    value: {
      code: 'VALIDATION_ERROR',
      message: 'Corpo da requisição vazio'
    }
  }
};
