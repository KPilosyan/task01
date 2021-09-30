const Sequelize = require('sequelize')
const db = require('../server/db_connect')

const Product = db.define('product', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    color: {
        type: Sequelize.STRING 
    },

}, {timestamps: false,
    createdAt: false,
    updatedAt: false

});

module.exports = Product;