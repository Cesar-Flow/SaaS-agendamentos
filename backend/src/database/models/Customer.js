const { DataTypes } = require('sequelize');
const { SequelizeProvider } = require('@providers');

const Customer = SequelizeProvider.db.define('Customer', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false }, 
    phone: { type: DataTypes.STRING, allowNull: true },
    notes: { type: DataTypes.TEXT, allowNull: true },
    situation: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
}, {
  timestamps: true, 
});

module.exports = Customer;