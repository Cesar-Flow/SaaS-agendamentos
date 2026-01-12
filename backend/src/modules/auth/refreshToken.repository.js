const { RefreshToken } = require('../../database/index');
// const { Op, Sequelize } = require('sequelize');

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
            attributes: ['id', 'hash_token', 'user_id', 'expires_at'],
            where: {
            id: sessionId,
            expired: false,
            revoked: false,
            // expires_at: {
            //     [Op.gt]: Sequelize.fn('NOW')
            // }
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
    },

    // Define a sessão como expirada
    setExpiredSession: async (sessionId, transaction = null) => {
        const [affectedRows] = await RefreshToken.update({
            expired: true
        }, {
            where: { 
                id: sessionId,
                expired: false,
                revoked: false
            }, transaction
        });

        return affectedRows > 0;
    } 
};
