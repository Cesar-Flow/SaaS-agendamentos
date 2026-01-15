const { User } = require('../../database/index');

module.exports = {
    // Cria um novo usuario
    createUser: async (dataUser, transaction = null) => {
        return await User.create({ 
                name: dataUser.name,
                email: dataUser.email,
                password: dataUser.password,
                phone: dataUser.phone,
                role_id: dataUser.roleId
            }, 
            { transaction }
        );
    },

    // Busca usuario por ID
    getUserById: async (id, transaction = null) => {
        return await User.findOne({ where: id, situation: 1 }, transaction);
    },

    // Busca usuario por email
    getUserByEmail: async (email, transaction = null) => {
        return await User.findOne({ where: { email, situation: 1 }, transaction });
    },

    // Busca todos usuarios
    getAllUsers: async (role = null, transaction = null) => { 
        return await User.findAll({
            where: role != null ? { role }: {},
            transaction
        });
    },

    // Busca todos usuarios ativos
    getAllActiveUsers: async (role = null, transaction = null) => {
        return await User.findAll({
            where: role != null  
                ? { situation: 1, role } 
                : { situation: 1 },
            transaction
        });
    },

    // Atualiza usuario
    updateUser: async (id, data, transaction = null) => {
        const user = await User.findByPk(id, { transaction });
        if (!user) return null;

        await User.update(data, { where: { id }, transaction });
        return await User.findByPk(id, { transaction }); // retorna o registro atualizado
    },

    // Deleta usuario (soft delete)
    deleteUser: async (id, transaction = null) => {
        const user = await this.getUserById(id, transaction);
        if (!user) return null;

        await User.update({ situation: 0 }, { where: { id }, transaction });
        return await User.findByPk(id, { transaction }); // retorna o registro “deletado”
    },
};
