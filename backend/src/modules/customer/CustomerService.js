// Repository
const customerRepository = require('./customer.repository');

// Exceptions
const { ValidationError } = require('@errors');

// Providers
const { BcryptProvider } = require('@providers');

class CustomerService {
    // Getters
    // Busca um cliente especifico pelo ID
    async getCustomerById(customerId) {
        const customer = await customerRepository.getCustomerById(customerId);

        if (!customer) throw new ValidationError('Cliente não encontrado');

        return customerRepository.getCustomerById(customerId);
    } 

    // Busca um cliente especifico pelo email
    async getCustomerByEmail(email) {
        return customerRepository.getCustomerByEmail(email);
    }

    // Busca todos os clientes cadastrados
    async getAllCustomers() {
        return customerRepository.getAllCustomers();
    }

    // Busca todos os clientes cadastrados (somente ativos)
    async getAllActiveCustomers() {
        return customerRepository.getAllActiveCustomers();
    }

    // Cria um novo cliente
    async createCustomer(data) {
        const exists = await customerRepository.getCustomerByEmail(data.email);

        if (exists) throw new ValidationError('Cliente já existente');

        const payload = {
            ...data,
            phone: data.phone || null,
            password: data.password,
        };

        return customerRepository.createCustomer(payload);
    }
}

module.exports = new CustomerService();