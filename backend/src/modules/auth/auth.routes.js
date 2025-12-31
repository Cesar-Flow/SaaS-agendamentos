const express = require('express');
const router = express.Router();

const AuthService = require('./AuthService');

// Middlewares
const { ensureAuthenticated, validateRegister } = require('@middlewares');

router.post('/registerCustomer', validateRegister, async (req, res) => {
    const response = await AuthService.registerCustomer(req.body);
    return res.status(201).json({ success: true, token: response.token });
});

router.post('/registerStaff', validateRegister, async (req, res) => {
    const response = await AuthService.registerStaff(req.body);
    return res.status(201).json({ success: true, token: response.token });
});

// router.post('/login', authService.login);
// router.post('/profile', ensureAuthenticated, authService.profile);

module.exports = router;