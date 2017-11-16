'use strict';

// Development specific configuration
// ==================================
module.exports = {
  port: process.env.PORT || 9000,

  mysql: {
    host: 'localhost',
    user: 'homestead',
    password: 'secret',
    database: 'mathrush',
    protocol: 'mysql:'
  }
};
