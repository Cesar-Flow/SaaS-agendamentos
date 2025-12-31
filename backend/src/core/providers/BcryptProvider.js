const bcrypt = require('bcrypt');

class BcryptProvider {
    constructor(saltRounds = 10) {
        this.saltRounds = saltRounds;
    }

    async hash(rawPass) {
        try {
            return bcrypt.hash(rawPass, this.saltRounds);
        } catch (err) {
            console.error('Erro ao gerar hash: ', err);
            throw err;
        }
    }

    async compare(rawPass, hash) {
        try {
            return bcrypt.compare(rawPass, hash);
        } catch (err) {
            console.error('Erro ao comparar senhas: ', err);
            throw err;
        }
    }
}

module.exports = new BcryptProvider();