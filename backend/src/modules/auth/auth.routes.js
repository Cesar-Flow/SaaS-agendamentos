const express = require('express');
const router = express.Router();

const AuthService = require('./AuthService');

// Middlewares
const { ensureAuthenticated, validateRegister, validateLogin } = require('@middlewares');

// Rota de registo do usuário final
router.post('/registerCustomer', validateRegister, async (req, res) => {
    const response = await AuthService.registerCustomer(req.body);
    return res.status(201).json({ success: true, token: response.token });
});

// Rota de registro do Staff da empresa
router.post('/registerStaff', validateRegister, async (req, res) => {
    const response = await AuthService.registerStaff(req.body);
    return res.status(201).json({ success: true, token: response.token });
});

// Rota de login
router.post('/login', validateLogin, async (req, res) => {
    const response = await AuthService.login(req.body);
    return res.status(200).json({ success: true, token: response.token });
});

// router.post('/profile', ensureAuthenticated, authService.profile);

module.exports = router;