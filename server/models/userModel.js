const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const db = require('../dataBase/dbConnect');

const userModel = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    required: true,
  },
  password: {
    type: Sequelize.STRING,
    required: true,
    set(value) {
      const salt = bcrypt.genSaltSync(12);
      const hashPassword = bcrypt.hashSync(value, salt);
      this.setDataValue('password', hashPassword);
    },
  },

}, {
  timestamps: false,
  createdAt: false,
  updatedAt: false,

});

module.exports = userModel;
