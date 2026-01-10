const { RefreshToken } = require('../../database/index');

module.exports = {
    saveHashToken: async (data) => {
        return await RefreshToken.create({
            hash_token: data.hashToken,
            user_id: data.userId
        });
    },

    // getActiveSession: async (data) => {
    //     return await RefreshToken.findOne({
    //         where: { 
    //             user_id: data.userId,
    //             expired: false,
    //             revoked: false
    //         }
    //     });
    // },

    getSessionById: async (sessionId) => {
        return await RefreshToken.findOne({
            attributes: ['id', 'hash_token', 'user_id'],
            where: {
                id: sessionId,
                expired: false,
                revoked: false
            },
            raw: true
        });
    },

    revokeSession: async (data) => {
        const [affectedRows] = await RefreshToken.update({
            revoked: data.revoked,
            reason: data.reason
        },
        {
            where: {
                id: data.sessionId
            }
        });

        return affectedRows > 0;
    }
}