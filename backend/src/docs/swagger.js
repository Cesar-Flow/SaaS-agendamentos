// Paths
const authPaths = require('./paths/auth');

// Schemas
const authSchemas = require('./schemas/auth');
const generalSchemas = require('./schemas/general');

// Security
const bearerAuth = require('./security/bearerAuth');
const bearerCookie = require('./security/bearerCookie');

module.exports = {
  openapi: '3.0.0',

  info: {
    title: 'API - Saas Agendamentos',
    version: '1.0.0',
    description: 'Documentação da API do Saas Agendamentos'
  },

  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Ambiente local'
    }
  ],

  // 🔥 ESPALHADO
  paths: {
    ...authPaths
  },

  components: {
    schemas: {
      ...authSchemas,
      ...generalSchemas
    },
    securitySchemes: {
      ...bearerAuth,
      ...bearerCookie
    }
  }
};
