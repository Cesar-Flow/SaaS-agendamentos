const bcrypt = require('bcrypt');

const saltRounds = 10;

module.exports = {
    hash: async (rawPass) => {
        try {
            return await bcrypt.hash(rawPass, saltRounds);
            
        } catch (err) {
            console.error('Erro: ', err);
            throw err;
        }
    },

    compare: async (rawPass, hash) => {
        try {
            return await bcrypt.compare(rawPass, hash);
        } catch (err) {
            console.error('Erro ao comparar senha: ', err);
            throw err;
        }
    }
};