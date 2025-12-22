const { DataTypes } = require('sequelize');
const sequelize = require('../../core/providers/sequelizeProvider');

const Staff = sequelize.define('Staff', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    active: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
    role: { type: DataTypes.STRING, allowNull: false },
    company_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Company', key: 'id' } },
    user_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'User', key: 'id' } },
}, {
  timestamps: true, 
});

module.exports = Staff;