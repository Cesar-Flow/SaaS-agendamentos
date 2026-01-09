const express = require('express');
const router = express.Router();

const AuthService = require('./AuthService');

// Middlewares
const { ensureAuthenticated, generalValidator } = require('@middlewares');

// [ POST ]
// Rota de registo do usuário final
router.post('/registerCustomer',
    generalValidator({
        email: { required: true },
        name: { required: true },
        password: { required: true }
    }),
    async (req, res) => {
        const response = await AuthService.registerCustomer(req.body);
        return res.status(201).json({ success: true, token: response.token });
    }
);

// Rota de registro do Staff da empresa
router.post('/registerStaff',
    generalValidator({
        email: { required: true },
        name: { required: true },
        password: { required: true }
    }),
    async (req, res) => {
        const response = await AuthService.registerStaff(req.body);
        return res.status(201).json({ success: true, token: response.token });
    }
);

// Rota de login
router.post('/login', 
    generalValidator({
        email: { required: true },
        password: { required: true }
    }),
    async (req, res) => {
    const response = await AuthService.login(req.body);
    return res.status(200).json({ 
        success: true, accessToken: response.accessToken, 
        refreshToken: response.refreshToken 
    });
});

// router.post('/save', async (req, res) => {
//     const response = await AuthService.saveHashToken(req.body);
//     return res.status(201).json({ response });
// }); 

// router.get('/session', async (req, res) => {
//     const response = await AuthService.getActiveSession(req.body);
//     return res.status(200).json({ response });
// });

// Rota de refresh do access token

// Após expirar um access token, o front envia a requisição e um novo token é gerado e retornado
router.post('/refresh', ensureAuthenticated, async (req, res) => {
    // logica
});


// router.post('/profile', ensureAuthenticated, authService.profile);

module.exports = router;