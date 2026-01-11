const { BcryptProvider, JwtProvider } = require('@providers');

class AuthUtils {
    // Verifica se um email já pertence a um usuário
    async findUserByEmail(email, CustomerService) {
        const customer = await CustomerService.getCustomerByEmail(email);
        if (customer) {
            return {
                id: customer.id,
                name: customer.name,
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

    // Verifica se uma sessão é válida
    async isSessionValid(sessionId, refreshToken, refreshTokenRepository) {
        if (!sessionId || !refreshToken) throw new AuthError('Sessão inválida');

        const session = await refreshTokenRepository.getSessionById(sessionId);

        if (!session) throw new AuthError('Sessão inválida');

        const isValid = await BcryptProvider.compare(refreshToken, session.hash_token);

        if (!isValid) throw new AuthError('Sessão inválida');

        return true
    }

    // Gera o access token do usuario
    async generateAccessToken(user) {
        const payload = {
            sub: user.id,
            email: user.email,
            role: user.role,
            active: user.active
        };

        return await JwtProvider.sign(payload);
    }
}

module.exports = new AuthUtils();