const { SequelizeProvider } = require('@providers');

// Models
const Appointment = require('./models/Appointment');
const Comp_design_settings = require('./models/Comp_design_settings');
const Company = require('./models/Company');
const RefreshToken = require('./models/RefreshToken');
const Service = require('./models/Service');
const User = require('./models/User');
const Role = require('./models/Role');


module.exports = { SequelizeProvider, Appointment, Comp_design_settings, Company, RefreshToken, Service, User, Role };