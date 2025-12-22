const { customer } = require('../../database/index')

module.exports = {
    createCustomer: async (dataUser) => {
        return await customer.create({ 
            name: dataUser.name,
            email: dataUser.email,
            password: dataUser.password
        });
    },

    getCustomerById: async (id) => {
        return await customer.findByPk(id);
    },

    getCustomerByEmail: async (email) => {
        return await customer.findOne({ where: { email } });
    },

    getAllActiveCustomers: async () => {
        return await customer.findAll({ where: { situation: 1 } });
    },

    getAllCustomers: async () => { 
        return await customer.findAll();
    },

    updateCustomer: async (id, data) => {
        const Customer = await customer.findByPk(id);
        if (!Customer) return null;
        return await Customer.update(data);
    },

    deleteCustomer: async (id) => {
        const Customer = await customer.findByPk(id);
        if (!Customer) return null;
        return await Customer.update({ situation: 0 });
    },
};