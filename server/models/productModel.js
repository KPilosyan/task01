const Sequelize = require('sequelize')
const db = require('../dataBase/dbConnect')

const product_model = db.define('products', {
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

module.exports = product_model;