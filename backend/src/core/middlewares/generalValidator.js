const { ValidationError } = require('@errors');

module.exports = (schema) => {
  return (req, res, next) => {
    try {
      const data = req.body;

      if (!data || Object.keys(data).length === 0) {
        throw new ValidationError('Corpo da requisição vazio');
      }

      for (const field in schema) {
        const rules = schema[field];
        const value = data[field];

        if (
          rules.required &&
          (value === undefined || value === null || value === '')
        ) {
          throw new ValidationError(`O campo ${field} é obrigatório`);
        }

        if (value === undefined || value === null) continue;

        const expectedType = rules.type || 'string';

        if (expectedType === 'array') {
          if (!Array.isArray(value)) {
            throw new ValidationError(`O campo ${field} deve ser um array`);
          }
          continue;
        }

        if (typeof value !== expectedType) {
          throw new ValidationError(`O campo ${field} deve ser do tipo ${expectedType}`);
        }

        if (field === 'email') {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value.trim())) {
            throw new ValidationError('Email inválido');
          }
        }
      }

      next();
    } catch (err) {
      next(err);
    }
  };
};
