const express = require('express');
const router = express.Router();

const AuthService = require('./AuthService');

// Middlewares
const { ensureAuthenticated, generalValidator, ensureSession } = require('@middlewares');

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

        res.cookie('session',`${response.sessionId}.${response.refreshToken}`,{
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            path: '/'
        });

        return res.status(201).json({ success: true, accessToken: response.accessToken, user: response.user });
    }
);

// Rota de registro do Staff da empresa
// router.post('/registerStaff',
//     generalValidator({
//         email: { required: true },
//         name: { required: true },
//         password: { required: true }
//     }),
//     async (req, res) => {
//         const response = await AuthService.registerStaff(req.body);
//         return res.status(201).json({ success: true, token: response.token });
//     }
// );

// Rota de login
router.post('/login', 
    generalValidator({
        email: { required: true },
        password: { required: true }
    }),
    async (req, res) => {
    const response = await AuthService.login(req.body);

    res.cookie('session',`${response.sessionId}.${response.refreshToken}`,{
       httpOnly: true,
       secure: false,
       sameSite: 'lax',
       path: '/'
    });

    return res.status(201).json({ success: true, accessToken: response.accessToken, user: response.user });
});

// Rota de refresh do access token
// Após expirar um access token, o front envia a requisição e um novo token é gerado e retornado
router.post('/refresh', ensureSession, async (req, res) => {
    // logica
});

// Rota de logout
router.post('/logout', ensureSession, async (req, res) => {
    try {
        await AuthService.logout(req.cookies.session);
    } catch (err) {
        console.log(err);
    }

    res.clearCookie('session', {
        httpOnly: true,
        secure: false,
        sameSite: 'lax'
    });

    return res.status(204).send();
});


// [ GET ]
// Rota de verificação para login automático
router.get('/me', ensureSession, async (req, res) => {
    const response = await AuthService.me(req.cookies.session);

    return res.status(200).json(response);
});

module.exports = router;