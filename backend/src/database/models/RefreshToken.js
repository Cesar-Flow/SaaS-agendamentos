const { DataTypes } = require('sequelize');
const { SequelizeProvider } = require('@providers');

const RefreshToken = SequelizeProvider.db.define('RefreshToken', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    hash_token: { type: DataTypes.STRING, allowNull: false },
    expired: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    revoked: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    reason: { type: DataTypes.STRING, allowNull: true },
    last_used_at: { type: DataTypes.DATE, allowNull: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Customer', key: 'id' } },
}, {
  timestamps: true, 
  tableName: 'RefreshToken'
}); 

module.exports = RefreshToken;