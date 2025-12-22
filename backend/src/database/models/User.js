const { DataTypes } = require('sequelize');
const sequelize = require('../../core/providers/sequelizeProvider');

const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: true },
    role: { type: DataTypes.STRING, allowNull: false },
    company_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Company', key: 'id' } },
}, {
  timestamps: true, 
});

module.exports = User;