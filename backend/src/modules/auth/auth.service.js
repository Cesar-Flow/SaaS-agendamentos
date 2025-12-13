const clientsRepository = require('../clients/clients.repository');
const clientsService = require('../clients/clients.service');

// Provider
const jwtProvider = require('../../core/providers/jwtProvider');
const bcryptProvider = require('../../core/providers/bcryptProvider');

// Exceptions
const ValidationError = require('../../core/errors/ValidationError');

module.exports = {
    login: async (data) => {
        const { email, password } = data;

        if (!email || !password) throw new ValidationError('Email e senha são obrigatórios');

        const user = await clientsService.getClientByEmail(email);

        if (!user) throw new ValidationError('Usuário não encontrado');

        const isValid = await bcryptProvider.compare(password, user.password);

        if (!isValid) throw new ValidationError('Credenciais inválidas')

        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        };

        const token = jwtProvider.sign(payload);

        return { token };
    },

    register: async (data) => {
        const { name, email, password } = data;

        if (!email || !name || !password) throw new ValidationError('Nome, email e senha são obrigatórios!');

        data.password = await bcryptProvider.hash(password);
        const user = await clientsService.createClient(data);

        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
        }; 

        const token = jwtProvider.sign(payload);

        return { token };
    },

    profile: async (data) => {
        const { id } = data;

        const user = await clientsService.getClientById(id);

        if (!user) throw new ValidationError('Cliente não encontrado');

        return ({
            id: user.id,
            name: user.name,
            email: user.email
        });
    }
}