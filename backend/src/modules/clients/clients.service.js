const { Clients } = require('../../database/index')

module.exports = {
    createClient: async (dataUser) => {
        return await Clients.create({ 
            name: dataUser.name,
            email: dataUser.email,
            password: dataUser.password
        });
    },

    getClientById: async (id) => {
        return await Clients.findByPk(id);
    },

    getClientByEmail: async (email) => {
        return await Clients.findOne({ where: { email } });
    },

    getAllActiveClients: async () => {
        return await Clients.findAll({ where: { situation: 1 } });
    },

    getAllClients: async () => { 
        return await Clients.findAll();
    },

    updateClient: async (id, data) => {
        const client = await Clients.findByPk(id);
        if (!client) return null;
        return await client.update(data);
    },

    deleteClient: async (id) => {
        const client = await Clients.findByPk(id);
        if (!client) return null;
        return await client.update({ situation: 0 });
    },
};