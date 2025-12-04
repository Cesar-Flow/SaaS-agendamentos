const userRepository = require('../users/user.repository');
const jwtProvider = require('../../core/providers/jwtProvider');
const bcrypt = require('bcryptjs');

module.exports = {
    async login({ email, password }) {
        const user = await userRepository.findByEmail(email);

        if (!user) return { error: "Usuário não encontrado" };

        const matches = await bcrypt.compare(password, user.password);

        if (!matches) return { error: "Senha inválida" };

        const token = jwtProvider.sign({
            id: user.id,
            email: user.email
        });

        return { token, user };
    }
}