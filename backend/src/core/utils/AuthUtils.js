// Providers
const { BcryptProvider, JwtProvider } = require('@providers');

// Errors
const { AuthError } = require('@errors');

class AuthUtils {
    // Verifica se uma sessão é válida
    async isSessionValid(sessionId, refreshToken, refreshTokenRepository) {
        if (!sessionId || !refreshToken) throw new AuthError('Sessão inválida');

        const session = await refreshTokenRepository.getSessionById(sessionId);

        if (!session) throw new AuthError('Sessão inválida');

        const isExpired = new Date(session.expires_at) <= new Date();

        if (isExpired) {
            await refreshTokenRepository.setExpiredSession(session.id); 
            throw new AuthError('Sessão expirada'); 
        }

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