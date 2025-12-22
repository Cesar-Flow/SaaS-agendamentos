const { DataTypes }  = require('sequelize');
const sequelize = require('../../core/providers/sequelizeProvider');

const Platform_admin = sequelize.define('Platform_admin', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false },
    active: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
}, {
  timestamps: true, 
});

module.exports = Platform_admin;