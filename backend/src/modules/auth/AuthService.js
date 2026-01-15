// Providers
const { BcryptProvider, SequelizeProvider } = require('@providers');

// Exceptions
const { AuthError } = require('@errors');

// Services
const UserService = require('../user/UserService');

// Repository
const refreshTokenRepository = require('./refreshToken.repository');
const roleRepository = require('./role.repository');

// Utils
const { AuthUtils } = require('@utils');

class AuthService {
    // Registra o novo cliente e faz o login automático caso funcione
    async registerCustomer(data) {
        const { password } = data;

        return await SequelizeProvider.transaction(async (t) => {
            const user = await UserService.createUser({
                    ...data,
                    email: data.email.toLowerCase().trim(),
                    password: await BcryptProvider.hash(password),
                    roleId: 1
            }, t);

            const refreshTokenPlain = crypto.randomUUID();
            const hashToken = await BcryptProvider.hash(refreshTokenPlain);

            const refreshToken = await refreshTokenRepository.saveHashToken({
                userId: user.id,
                hashToken
            }, t);

            const role = await roleRepository.getRoleById(1, t);

            return { 
                accessToken: await AuthUtils.generateAccessToken(user),
                refreshToken: refreshTokenPlain,
                sessionId: refreshToken.id,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: {
                        id: role.id,
                        name: role.name,
                        description: role.description
                    }
                }
            };
        });
    }

    // Tenta fazer o login do usuário
    async login(data) {
        const { email, password } = data;

        return await SequelizeProvider.transaction(async (t) => {
            const user = await UserService.getUserByEmail(email.toLowerCase().trim(), t);

            if (!user) throw new AuthError('Email ou senha inválidos');
            if (user.situation !== 1) throw new AuthError('Usuário não está ativo');

            const isValid = await BcryptProvider.compare(password, user.password);
            if (!isValid) throw new AuthError('Email ou senha inválidos');

            const refreshTokenPlain = crypto.randomUUID();
            const hashToken = await BcryptProvider.hash(refreshTokenPlain);

            const refreshToken = await refreshTokenRepository.saveHashToken({
                userId: user.id,
                hashToken
            }, t);

            const role = await roleRepository.getRoleById(user.role_id);

            return { 
                accessToken: await AuthUtils.generateAccessToken(user),
                refreshToken: refreshTokenPlain,
                sessionId: refreshToken.id,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: {
                        id: role.id,
                        name: role.name,
                        description: role.description
                    }
                }
            };
        });
    }

    // Encerra sessão
    async logout(data) {
        const parts = data.split('.');
        if (parts.length !== 2) throw new AuthError('Sessão inválida');

        const [sessionId, refreshToken] = parts;

        await AuthUtils.isSessionValid(sessionId, refreshToken, refreshTokenRepository);

        return await refreshTokenRepository.revokeSession({
            revoked: true,
            reason: 'logout pelo usuário',
            sessionId
        });
    }

    // Parte do login automatico
    async me(data) {
        const parts = data.split('.');
        if (parts.length !== 2) throw new AuthError('Sessão inválida');

        const [sessionId, refreshToken] = parts;

        await AuthUtils.isSessionValid(sessionId, refreshToken, refreshTokenRepository);

        const session = await refreshTokenRepository.getSessionById(sessionId);
        const user = await UserService.getUserById(session.user_id);

        if (!user) throw new AuthError('Sessão inválida');

        const role = await roleRepository.getRoleById(user.role_id);

        return {
            accessToken: await AuthUtils.generateAccessToken(user),
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: {
                    id: role.id,
                    name: role.name,
                    description: role.description
                }
            }
        };
    }

    // Gera um novo access token
    async refresh(data) {
        const parts = data.split('.');
        if (parts.length !== 2) throw new AuthError('Sessão inválida');

        const [sessionId, refreshToken] = parts;

        await AuthUtils.isSessionValid(sessionId, refreshToken, refreshTokenRepository);

        const session = await refreshTokenRepository.getSessionById(sessionId);
        const user = await UserService.getUserById(session.user_id);

        if (!user) throw new AuthError('Sessão inválida');

        const role = await roleRepository.getRoleById(user.role_id);

        return {
            accessToken: await AuthUtils.generateAccessToken(user),
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: {
                    id: role.id,
                    name: role.name,
                    description: role.description
                }
            }
        }
    }

}

module.exports = new AuthService();