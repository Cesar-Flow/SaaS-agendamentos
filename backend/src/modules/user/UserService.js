// Repository
const userRepository = require('./user.repository');

// Exceptions
const { ValidationError } = require('@errors');

class UserService {
    // Cria um novo usuario
    async createUser(data, transaction = null) {
        const exists = await userRepository.getUserByEmail(data.email, transaction);

        if (exists) throw new ValidationError('Usuário já existente');

        const payload = {
            ...data,
            phone: data.phone || null,
        };

        return userRepository.createUser(payload, transaction);
    }

    // Getters
    // Busca um usuario especifico pelo ID
    async getUserById(userId) {
        return userRepository.getUserById(userId);
    } 

    // Busca um usuario especifico pelo email
    async getUserByEmail(email, transaction = null) {
        return userRepository.getUserByEmail(email, transaction);
    }

    // Busca todos os usuarios cadastrados
    async getAllUsers() {
        return userRepository.getAllUsers();
    }

    // Busca todos os usuarios cadastrados (somente ativos)
    async getAllActiveUsers() {
        return userRepository.getAllActiveUsers();
    }

    // Busca todos os clientes cadastrados
    async getAllCustomers() {
        return userRepository.getAllUsers(1);
    }

    // Busca todos os staffs cadastrados
    async getAllStaffs() {
        return userRepository.getAllUsers(2);
    }

    // Busca todos os clientes cadastrados (somente ativos)
    async getAllActiveCustomers() {
        return userRepository.getAllActiveUsers(1);
    }

    // Busca todos os staffs cadastrados (somente ativos)
    async getAllActiveStaffs() {
        return userRepository.getAllActiveUsers(2);
    }
}

module.exports = new UserService();