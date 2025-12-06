const userRepository = require('../users/user.repository');
const jwtProvider = require('../../core/providers/jwtProvider');
const bcrypt = require('bcryptjs');

// module.exports = {
//     async login({ email, password }) {
//         const user = await userRepository.findByEmail(email);

//         if (!user) return { error: "Usuário não encontrado" };

//         const matches = await bcrypt.compare(password, user.password);

//         if (!matches) return { error: "Senha inválida" };

//         const token = jwtProvider.sign({
//             id: user.id,
//             email: user.email
//         });

//         return { token, user };
//     }
// }

module.exports = {
    login: async (data) => {
        const { email, password } = data;

        if (!email || !password) return { error: "Dados faltando" };

        const user = await userRepository.findByEmail(email);

        if (!user) return { error: "Usuário não encontrado" };
        if (password != user.password) return { error: "Credenciais inválidas" };

        const payload = {
            id: user.id,
            name: user.name,
            email: user.email
        };

        const token = jwtProvider.sign(payload);

        return { token };
    },

    profile: async (data) => {
        const { id } = data;

        const user = await userRepository.findById(id);

        if (!user) return { error: "Usuário não encontrado" };

        return ({
            id: user.id,
            name: user.name,
            email: user.email
        });
    }
}