const { DataTypes } = require('sequelize');
const sequelize = require('../../core/providers/sequelizeProvider');

const Comp_design_settings = sequelize.define('Comp_design_settings', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    logo_url: { type: DataTypes.STRING, allowNull: true },
    primary_color: { type: DataTypes.STRING, allowNull: true },
    secondary_color: { type: DataTypes.STRING, allowNull: true },
    font_family: { type: DataTypes.STRING, allowNull: true },
    button_style: { type: DataTypes.STRING, allowNull: true },
    extra_json: { type: DataTypes.JSON, allowNull: true },
    company_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Company', key: 'id' } },
}, {
  timestamps: true, 
});

module.exports = Comp_design_settings;