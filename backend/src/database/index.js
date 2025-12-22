const sequelize = require('../core/providers/sequelizeProvider');

// Models
const Appointment = require('./models/Appointment');
const Comp_design_settings = require('./models/Comp_design_settings');
const Company = require('./models/Company');
const Customer = require('./models/Customer');
const Platform_admin = require('./models/Platform_admin');
const Refresh_token = require('./models/Refresh_token');
const Service = require('./models/Service');
const Staff = require('./models/Staff');
const User = require('./models/User');


module.exports = { sequelize, Appointment, Comp_design_settings, Company, Customer, Platform_admin, Refresh_token, Service, Staff, User };