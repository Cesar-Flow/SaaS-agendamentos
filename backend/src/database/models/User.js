const { DataTypes } = require('sequelize');
const { SequelizeProvider } = require('@providers');

const User = SequelizeProvider.db.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: true },
    notes: { type: DataTypes.TEXT, allowNull: true },
    situation: { type: DataTypes.INTEGER, allowNull: false,defaultValue: 1 },
    role_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Role', key: 'id' } },
}, {
    timestamps: true,
    tableName: 'User',
});

module.exports = User;