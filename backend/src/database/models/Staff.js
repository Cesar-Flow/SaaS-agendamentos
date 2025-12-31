const { DataTypes } = require('sequelize');
const { SequelizeProvider } = require('@providers');

const User = SequelizeProvider.db.define('Staff', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: true },
    role: { type: DataTypes.STRING, allowNull: false },
    situation: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    company_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Company', key: 'id' } },
}, {
  timestamps: true, 
});

module.exports = User;