// PG-PROMISE CONFIGURATION
const config = require('./config');
// eslint-disable-next-line import/order
const pgp = require('pg-promise')();
// connecting database with pg-promise library
module.exports = pgp(config);
