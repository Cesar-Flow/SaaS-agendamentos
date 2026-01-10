const { RefreshToken } = require('../../database/index');

module.exports = {
    // Salva um novo refresh token no banco
    saveHashToken: async (data, transaction = null) => {
        return await RefreshToken.create({
            hash_token: data.hashToken,
            user_id: data.userId
        },
        { transaction }
        );
    },

    // Busca uma sessão ativa pelo id
    getSessionById: async (sessionId, transaction = null) => {
        return await RefreshToken.findOne({
            attributes: ['id', 'hash_token', 'user_id'],
            where: {
            id: sessionId,
            expired: false,
            revoked: false
            },
            raw: true,
            transaction
        });
    },

    //Revoga uma sessão pelo id
    revokeSession: async (data, transaction = null) => {
        const [affectedRows] = await RefreshToken.update({
                revoked: data.revoked,
                reason: data.reason
            }, {
                where: { id: data.sessionId },
                transaction
            }
        );

        return affectedRows > 0;
    }
};
