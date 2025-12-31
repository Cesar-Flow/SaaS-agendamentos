const { DataTypes } = require('sequelize');
const { SequelizeProvider } = require('@providers');

const Refresh_token = SequelizeProvider.db.define('Refresh_token', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    token: { type: DataTypes.STRING, allowNull: false },
    expires_at: { type: DataTypes.DATE, allowNull: false },
    revoked: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    user_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'User', key: 'id' } },
}, {
  timestamps: true, 
});

module.exports = Refresh_token;