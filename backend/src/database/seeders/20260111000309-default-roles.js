'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Role', [
      {
        name: 'CUSTOMER',
        description: 'Usuário final do sistema',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'STAFF',
        description: 'Funcionário / suporte',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'ADMIN',
        description: 'Administrador do sistema',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      'Role',
      {
        name: ['CUSTOMER', 'STAFF', 'ADMIN'],
      }
    );
  }
};
