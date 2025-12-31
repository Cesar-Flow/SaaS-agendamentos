const { user } = require('../../database/index');

module.exports = {
    createUser: async (dataUser) => {
        return await user.create({ 
            name: dataUser.name,
            email: dataUser.email,
            password: dataUser.password,
            phone: !dataUser.phone ? null : dataUser.phone,
            role: dataUser.role,
            company_id: dataUser.company_id,
        });
    },

    getUserById: async (id) => {
        return await user.findByPk(id);
    },

    getUserByEmail: async (email) => {
        return await user.findOne({ where: { email } });
    },

    getAllActiveUsers: async () => { 
        return await user.findAll({ where: { situation: 1 } });
    },
    
    getAllUsers: async () => { 
        return await user.findAll();
    },

    updateUser: async (id, data) => {
        const User = await user.findByPk(id);
        if (!User) return null;
        return await User.update(data);
    },
    
    deleteUser: async (id) => {
        const User = await user.findByPk(id);
        if (!User) return null;
        return await User.update({ situation: 0 });
    },
}