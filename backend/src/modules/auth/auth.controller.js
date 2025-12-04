const authService = require('./auth.service');

module.exports = {
    login: async (req, res) => {
        const result = await authService.login(req.body);

        if (result.error) return res.status(400).json({ error: result.error });

        return res.json(result);
    }
};