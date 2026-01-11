// Providers
const { JwtProvider, BcryptProvider, SequelizeProvider } = require('@providers');

// Exceptions
const { AuthError } = require('@errors');

// Services
const CustomerService = require('../customer/CustomerService');

// Repository
const refreshTokenRepository = require('./refreshToken.repository');

// Utils
const { AuthUtils } = require('@utils');

class AuthService {
    // Registra o novo cliente e faz o login automático caso funcione
    async registerCustomer(data) {
        const { password } = data;

        return await SequelizeProvider.transaction(async (t) => {
            const user = await CustomerService.createCustomer({
                    ...data,
                    email: data.email.toLowerCase().trim(),
                    password: await BcryptProvider.hash(password)
            }, t);

            const refreshTokenPlain = crypto.randomUUID();
            const hashToken = await BcryptProvider.hash(refreshTokenPlain);

            const refreshToken = await refreshTokenRepository.saveHashToken({
                userId: user.id,
                hashToken
            }, t);

            return { 
                accessToken: await AuthUtils.generateAccessToken(user),
                refreshToken: refreshTokenPlain,
                sessionId: refreshToken.id,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role || 'customer',
                }
            };
        });
    }

    // Registra o novo staff e faz o login automático caso funcione
    // async registerStaff(data) {
    //     const { password } = data;
    //     let user = await StaffService.createStaff(data);

    //     return await this.login({
    //         email: user.email,
    //         password: password
    //     });
    // }

    // Tenta fazer o login do usuário
    async login(data) {
        const { email, password } = data;

        return await SequelizeProvider.transaction(async (t) => {
            const user = await AuthUtils.findUserByEmail(email, CustomerService);

            if (!user) throw new AuthError('Email ou senha inválidos');
            if (!user.active) throw new AuthError('Usuário não está ativo');

            const isValid = await BcryptProvider.compare(password, user.password);
            if (!isValid) throw new AuthError('Email ou senha inválidos');

            const refreshTokenPlain = crypto.randomUUID();
            const hashToken = await BcryptProvider.hash(refreshTokenPlain);

            const refreshToken = await refreshTokenRepository.saveHashToken({
                userId: user.id,
                hashToken
            }, t);

            console.log(user);

            return { 
                accessToken: await AuthUtils.generateAccessToken(user),
                refreshToken: refreshTokenPlain,
                sessionId: refreshToken.id,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role || 'customer',
                }
            };
        });
    }

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

    async me(data) {
        const parts = data.split('.');
        if (parts.length !== 2) throw new AuthError('Sessão inválida');

        const [sessionId, refreshToken] = parts;

        await AuthUtils.isSessionValid(sessionId, refreshToken, refreshTokenRepository);

        const session = await refreshTokenRepository.getSessionById(sessionId);
        const user = await CustomerService.getCustomerById(session.user_id);

        if (!user) throw new AuthError('Sessão inválida');

        const payload = {
            sub: user.id,
            email: user.email,
            role: user.role,
            active: user.active
        };

        return {
            accessToken: await JwtProvider.sign(payload),
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: 'customer',
            }
        };
    }

    // Verifica no banco se a sessão existe
    // Verifica no banco se a sessão ainda é valida
    // Verifica no banco se a sessão pertence ao usuário buscado

    // Caso verdadeiro: Gera um novo access token e retorna
    // async refresh() {

    // }
}

module.exports = new AuthService();