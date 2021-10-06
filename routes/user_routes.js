const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller')

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/registration", userController.registration)
router.post("/login", userController.login)
// router.post("/logout", userController.logout)
// router.get("/activate/:link", userController.activate)
// router.get("/refresh", userController.refreshToken)
router.get("/", userController.getUsers)

module.exports = router 


