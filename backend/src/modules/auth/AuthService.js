// Providers
const { JwtProvider, BcryptProvider, SequelizeProvider } = require('@providers');

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
            const user = await UserService.getUserByEmail(email, t);

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
        const user = await UserService.getUserById(session.user_id);

        if (!user) throw new AuthError('Sessão inválida');

        const payload = {
            sub: user.id,
            email: user.email,
            role: user.role_id,
            active: user.situation === 1 ? true : false
        };

        const role = await roleRepository.getRoleById(user.role_id);

        return {
            accessToken: await JwtProvider.sign(payload),
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

    // Verifica no banco se a sessão existe
    // Verifica no banco se a sessão ainda é valida
    // Verifica no banco se a sessão pertence ao usuário buscado

    // Caso verdadeiro: Gera um novo access token e retorna
    // async refresh() {

    // }
}

module.exports = new AuthService();