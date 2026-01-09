// Providers
const { JwtProvider, BcryptProvider } = require('@providers');

// Exceptions
const { AuthError } = require('@errors');

// Services
const CustomerService = require('../customer/CustomerService');

// Repository
const authRepository = require('./auth.repository');

class AuthService {
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

    // async registerStaff(data) {
    //     const { password } = data;
    //     let user = await StaffService.createStaff(data);

    //     return await this.login({
    //         email: user.email,
    //         password: password
    //     });
    // }

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

        const accessToken = JwtProvider.sign(payload, { expiresIn: '15m' });
        const refreshToken = crypto.randomUUID();
        const hashRefreshToken = await BcryptProvider.hash(refreshToken);

        await this.saveHashToken({
            hashToken: hashRefreshToken,
            userId: user.id
        });

        return { accessToken, refreshToken };
    }

    async saveHashToken(data) {
        const response = await authRepository.saveHashToken(data);

        return response;
    }

    async getActiveSession(data) {
        const response = await authRepository.getActiveSession(data);

        return response;
    }

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