const Sequelize = require('sequelize')
const db = require('../server/db_connect')

const token_model = db.define('userTokens', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        ref: 'users'
    },
    refreshToken: {
        type: Sequelize.STRING,
        required: true
    },

}, {timestamps: false,
    createdAt: false,
    updatedAt: false

});

module.exports = token_model;