const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller')


router.post("/registration", userController.registration)
router.post("/login", userController.login)

module.exports = router 


