const express = require('express');
const router = express.Router();

const authController = require('./auth.controller');
const ensureAuthenticated = require("../../core/middlewares/ensureAuthenticated");

router.post('/login', authController.login);
router.post('/profile', ensureAuthenticated, authController.profile)

module.exports = router;