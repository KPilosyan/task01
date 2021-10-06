const Sequelize = require('sequelize')
const db = require('../server/db_connect')
const bcrypt = require('bcrypt')


const user_model = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: Sequelize.STRING,
        unique: true, 
        required: true
    },
    password: {
        type: Sequelize.STRING,
        required: true,
        set (value) {
            const salt = bcrypt.genSaltSync(12)
            const hashPassword = bcrypt.hashSync(value, salt) 
            this.setDataValue('password', hashPassword)
        }
    },

}, {timestamps: false,
    createdAt: false,
    updatedAt: false

});

module.exports = user_model;