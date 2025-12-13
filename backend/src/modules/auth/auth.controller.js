const authService = require('./auth.service');

module.exports = {
    login: async (req, res) => {
        const result = await authService.login(req.body);

        return res.status(200).json({ success: true, token: result.token });
    },

    register: async (req, res) => {
        const result = await authService.register(req.body);

        return res.status(200).json({ success: true, token: result.token });
    },

    profile: async (req, res) => {
        const result = await authService.profile(req.body);

        return res.status(200).json({ result });
    }
};