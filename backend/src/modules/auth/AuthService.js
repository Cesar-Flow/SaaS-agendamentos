// Providers
const { JwtProvider, BcryptProvider } = require('@providers');

// Exceptions
const { AuthError } = require('@errors');

// Services
const CustomerService = require('../customer/CustomerService');

class AuthService {
    async registerCustomer(data) {
        let user = await CustomerService.createCustomer(data);

        const payload = {
            sub: user.id,
            role: 'customer'
        };

        return {
            token: JwtProvider.sign(payload)
        };
    }

    async registerStaff(data) {
        let user = await CustomerService.createCustomer(data);
    
        const payload = {
            sub: user.id,
            role: 'staff'
        };

        return {
            token: JwtProvider.sign(payload)
        };
    }

    async login(data) {
        const { email, password } = data;
        let user = await this.findUserByEmail(email);

        if (!user) throw new AuthError('Email ou senha inválidos');

        if (!user.active) throw new AuthError('Usuário não está ativo');

        const isValid = await BcryptProvider.compare(password, user.password);

        if (!isValid) throw new AuthError('Email ou senha inválidos');

        const payload = {
            sub: user.id,
            role: user.role
        };

        return {
            token: JwtProvider.sign(payload)
        };
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
}

module.exports = new AuthService();