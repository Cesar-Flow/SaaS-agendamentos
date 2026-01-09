const { RefreshToken } = require('../../database/index');

module.exports = {
    saveHashToken: async (data) => {
        return await RefreshToken.create({
            hash_token: data.hashToken,
            user_id: data.userId
        });
    },

    getActiveSession: async (data) => {
        return await RefreshToken.findOne({
            where: { 
                user_id: data.userId,
                expired: false,
                revoked: false
            }
        });
    },
}