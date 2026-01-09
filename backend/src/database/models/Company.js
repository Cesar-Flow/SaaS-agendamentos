const { DataTypes } = require('sequelize');
const { SequelizeProvider } = require('@providers');

const Company = SequelizeProvider.db.define('Company', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: true },
    phone: { type: DataTypes.STRING, allowNull: true },
    plan_type: { type: DataTypes.STRING, allowNull: false },
}, {
  timestamps: true, 
  tableName: 'Company',
});

module.exports = Company;