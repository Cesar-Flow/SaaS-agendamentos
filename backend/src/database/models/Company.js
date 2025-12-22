const { DataTypes } = require('sequelize');
const sequelize = require('../../core/providers/sequelizeProvider');

const Company = sequelize.define('Company', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: true },
    phone: { type: DataTypes.STRING, allowNull: true },
    plan_type: { type: DataTypes.STRING, allowNull: false },
}, {
  timestamps: true, 
});

module.exports = Company;