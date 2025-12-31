const jwt = require('jsonwebtoken');

class JwtProvider {
    constructor(secret, expiresIn = '2d') {
        this.secret = secret || process.env.JWT_SECRET;
        this.expiresIn = expiresIn;
    }

    sign(payload) {
        return jwt.sign(payload, this.secret, {
            expiresIn: this.expiresIn,
        });
    }

    verify(token) {
        try {
            return jwt.verify(token, this.secret);
        } catch (err) {
            return null;
        }
    }
}

module.exports = new JwtProvider();
