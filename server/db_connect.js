const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const {Pool} = require("pg");


// dotenv.config();

// module.exports =  new Sequelize('postgres', 'postgres', 'password', {
//   host: 'localhost',
//   dialect: 'postgres',
//   operatorsAliases: false,

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },
// });

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'password',
    port: 5432
});

module.exports =  pool;
 
