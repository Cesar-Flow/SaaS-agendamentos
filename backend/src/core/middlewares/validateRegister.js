const { ValidationError } = require('@errors'); 

module.exports = (req, res, next) => {
    if (!req.body) throw new ValidationError('Corpo da requisição vazio');

    const { email, password, name } = req.body || {};

    try {

        if (!email) throw new ValidationError('Email é obrigatório');
        if (!name) throw new ValidationError('Nome é obrigatório');
        if (!password) throw new ValidationError('Senha é obrigatória');

        if (typeof email !== 'string') throw new ValidationError('Email inválido');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) throw new ValidationError('Email inválido');

        next();
    } catch (err) {
        next(err);
    }
};
