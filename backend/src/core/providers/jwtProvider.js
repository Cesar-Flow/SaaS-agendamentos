const jwt = require('jsonwebtoken');

module.exports = {
    sign(payload) {
        return jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '2d',
        });
    },

    verify(token) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET);
        } catch (err) {
            return null;
        }
    }
}