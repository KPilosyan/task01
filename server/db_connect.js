const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const {Pool} = require("pg");


dotenv.config();

const pool = new Sequelize('postgres', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

// DB Check 
pool.authenticate()
    .then(() => console.log('db successfull'))
    .catch(err => console.log('dggfdf ' + err));


module.exports =  pool;
 
