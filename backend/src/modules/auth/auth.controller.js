const authService = require('./auth.service');
const userRepository = require('../users/user.repository');

module.exports = {
    login: async (req, res) => {
        const result = await authService.login(req.body);

        if (result.error) return res.status(400).json({ error: result.error });
        
        return res.status(200).json({ success: true, token: result.token });
    },

    profile: async (req, res) => {
        const result = await authService.profile(req.body);

        if (result.error) return res.status(400).json({ error: result.error });

        return res.status(200).json({ result });
    }
};