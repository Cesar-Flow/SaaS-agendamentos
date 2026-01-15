const { DataTypes } = require('sequelize');
const { SequelizeProvider } = require('@providers');

const Role = SequelizeProvider.db.define('Role', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    description: { type: DataTypes.STRING, allowNull: true },
}, {
    timestamps: true,
    tableName: 'Role',
});

module.exports = Role;