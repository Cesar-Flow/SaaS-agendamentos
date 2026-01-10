const { Customer } = require('../../database/index');

module.exports = {
    // Cria um novo cliente
    createCustomer: async (dataUser, transaction = null) => {
        return await Customer.create(
            { 
                name: dataUser.name,
                email: dataUser.email,
                password: dataUser.password,
                phone: dataUser.phone,
            },
            { transaction }
        );
    },

    // Busca cliente por ID
    getCustomerById: async (id, transaction = null) => {
        return await Customer.findByPk(id, { transaction });
    },

    // Busca cliente por email
    getCustomerByEmail: async (email, transaction = null) => {
        return await Customer.findOne({ where: { email }, transaction });
    },

    // Busca todos clientes ativos
    getAllActiveCustomers: async (transaction = null) => {
        return await Customer.findAll({ where: { situation: 1 }, transaction });
    },

    // Busca todos clientes
    getAllCustomers: async (transaction = null) => { 
        return await Customer.findAll({ transaction });
    },

    // Atualiza cliente
    updateCustomer: async (id, data, transaction = null) => {
        const customer = await Customer.findByPk(id, { transaction });
        if (!customer) return null;

        await Customer.update(data, { where: { id }, transaction });
        return await Customer.findByPk(id, { transaction }); // retorna o registro atualizado
    },

    // Deleta cliente (soft delete)
    deleteCustomer: async (id, transaction = null) => {
        const customer = await Customer.findByPk(id, { transaction });
        if (!customer) return null;

        await Customer.update({ situation: 0 }, { where: { id }, transaction });
        return await Customer.findByPk(id, { transaction }); // retorna o registro “deletado”
    },
};
