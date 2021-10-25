const Sequelize = require('sequelize');
const Internal = require('../errors/Internal');

require('dotenv').config();

const pool = new Sequelize('postgres', process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: 0,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

// DB Check
pool.authenticate()
  .then()
  .catch((err) => { throw new Internal(err); });

module.exports = pool;
