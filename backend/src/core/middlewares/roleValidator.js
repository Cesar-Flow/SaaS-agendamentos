const { ForbbidenError, AuthError } = require('@errors');

module.exports = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user || !req.user.role) throw new AuthError('Usuário não autenticado');

        if (!allowedRoles.includes(req.user.role)) throw new ForbbidenError('Usuário sem permissão de acesso');

        if (user.role === "STAFF") {
            const resourceCompany = req.body.companyId || req.params.companyId;

            if (resourceCompany && resourceCompany !== user.companyId) throw new ForbbidenError('Acesso negado à empresa informada');
        }

        next();
    };
};
