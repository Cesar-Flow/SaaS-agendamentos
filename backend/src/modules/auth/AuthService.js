// Providers
const { JwtProvider, BcryptProvider } = require('@providers');

// Exceptions
const { AuthError } = require('@errors');

// Services
const CustomerService = require('../customer/CustomerService');

// Repository
const authRepository = require('./auth.repository');

class AuthService {
    // Registra o novo cliente e faz o login automático caso funcione
    async registerCustomer(data) {
        const { password } = data;
        let user = await CustomerService.createCustomer({
            ...data,
            email: data.email.toLowerCase().trim(),
            password: await BcryptProvider.hash(password)
        });

        return await this.login({
            email: user.email,
            password: password
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
        let user = await this.findUserByEmail(email);

        if (!user) throw new AuthError('Email ou senha inválidos');

        if (!user.active) throw new AuthError('Usuário não está ativo');

        const isValid = await BcryptProvider.compare(password, user.password);

        if (!isValid) throw new AuthError('Email ou senha inválidos');

        const payload = {
            sub: user.id,
            email: user.email,
            role: user.role,
            active: user.active
        };

        const accessToken = JwtProvider.sign(payload);

        const refreshToken = crypto.randomUUID();
        const hashRefreshToken = await BcryptProvider.hash(refreshToken);

        const tokenEntity = await this.saveHashToken({
            hashToken: hashRefreshToken,
            userId: user.id
        });

        return { 
            accessToken, refreshToken, sessionId: tokenEntity.id,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: 'customer',
            }
        };
    }

    async isSessionValid(sessionId, refreshToken) {
        if (!sessionId || !refreshToken) throw new AuthError('Sessão inválida');

        const session = await authRepository.getSessionById(sessionId);

        if (!session) throw new AuthError('Sessão inválida');

        const isValid = await BcryptProvider.compare(refreshToken, session.hash_token);

        if (!isValid) throw new AuthError('Sessão inválida');

        return true
    }

    async logout(data) {
        const parts = data.split('.');
        if (parts.length !== 2) throw new AuthError('Sessão inválida');

        const [sessionId, refreshToken] = parts;

        await this.isSessionValid(sessionId, refreshToken);

        return await authRepository.revokeSession({
            revoked: true,
            reason: 'logout pelo usuário',
            sessionId
        });
    }

    // Salva RefreshToken no banco
    async saveHashToken(data) {
        const tokenEntity = await authRepository.saveHashToken(data);

        return tokenEntity;
    }

    // Verifica se um usuário tem sessão ativa
    async getActiveSession(data) {
        const response = await authRepository.getSessionById(data);

        return response;
    }

    async me(data) {
        const parts = data.split('.');
        if (parts.length !== 2) throw new AuthError('Sessão inválida');

        const [sessionId, refreshToken] = parts;

        await this.isSessionValid(sessionId, refreshToken);

        const session = await authRepository.getSessionById(sessionId);
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

    // Verifica se um email já pertence a um usuário
    async findUserByEmail(email) {
        const customer = await CustomerService.getCustomerByEmail(email);
        if (customer) {
            return {
                id: customer.id,
                email: customer.email,
                password: customer.password,
                active: customer.situation,
                role: 'customer',
            };
        }

        // fazer o mesmo para os proximos niveis de usuários
        // fluxo: customer -> staff -> dev
        
        return null;
    }

    // Verifica no banco se a sessão existe
    // Verifica no banco se a sessão ainda é valida
    // Verifica no banco se a sessão pertence ao usuário buscado

    // Caso verdadeiro: Gera um novo access token e retorna
    async refresh() {

    }
}

module.exports = new AuthService();