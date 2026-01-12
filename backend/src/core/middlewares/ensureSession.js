const { AuthError } = require('@errors');

module.exports = (req, res, next) => {
    if (!req.cookies.session) throw new AuthError('Sessão não encontrada');

    const [ sessionId, refreshToken ] = req.cookies.session.split('.');

    if (!sessionId || !refreshToken) throw new AuthError('Sessão não encontrada');
    
    next();
};
