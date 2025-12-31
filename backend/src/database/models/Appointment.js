const { DataTypes } = require('sequelize');
const { SequelizeProvider } = require('@providers');

const Appointment = SequelizeProvider.db.define('Appointment', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    appointment_date: { type: DataTypes.DATE, allowNull: false },
    start_time: { type: DataTypes.TIME, allowNull: false },
    end_time: { type: DataTypes.TIME, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false, defaultValue: 'scheduled' },
    notes: { type: DataTypes.TEXT, allowNull: true },
    customer_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Customer', key: 'id' } },
    service_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Service', key: 'id' } },
    company_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Company', key: 'id' } },
}, {
  timestamps: true,
});

module.exports = Appointment;