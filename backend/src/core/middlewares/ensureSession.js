const { AuthError } = require('@errors');

module.exports = (req, res, next) => {
    const [ sessionId, refreshToken ] = req.cookies.session.split('.');

    if (!sessionId || !refreshToken) throw new AuthError('Sessão não encontrada');

    next();
};
