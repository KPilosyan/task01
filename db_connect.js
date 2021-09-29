const {Pool} = require("pg");
const client = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'password',
    port: 5432
});

client.connect();

module.exports = client
