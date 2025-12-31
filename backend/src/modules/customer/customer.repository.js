const { Customer } = require('../../database/index')

module.exports = {
     createCustomer: async (dataUser) => {
        return await Customer.create({ 
            name: dataUser.name,
            email: dataUser.email,
            password: dataUser.password,
            phone: dataUser.phone,
        });
    },

    getCustomerById: async (id) => {
        return await Customer.findByPk(id);
    },

    getCustomerByEmail: async (email) => {
        return await Customer.findOne({ where: { email } });
    },

    getAllActiveCustomers: async () => {
        return await Customer.findAll({ where: { situation: 1 } });
    },

    getAllCustomers: async () => { 
        return await Customer.findAll();
    },

    updateCustomer: async (id, data) => {
        const customer = await Customer.findByPk(id);
        if (!customer) return null;
        return await Customer.update(data);
    },

    deleteCustomer: async (id) => {
        const customer = await Customer.findByPk(id);
        if (!customer) return null;
        return await Customer.update({ situation: 0 });
    },
};