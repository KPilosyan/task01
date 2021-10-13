const userService = require('../service/user_service')
const Valid = require('../errorHandler/validation_error');
const GeneralError = require('../errorHandler/general_error');

class UserController {
    
    async registration(req, res, next) {
        try {
            const {email, password} = req.body;
            
            const userData = await userService.registration(email, password)
            console.log('Registration Successful')
            return res.json(userData)

        } catch (err) {
            res.send(err.message)
        }
        next()
    }

    async login(req, res, next) { 
        try {
            const {email, password} = req.body;

            const userData = await userService.login(email, password);
            
            return res.json(userData.accessToken)

        } catch (err) {
            const val = new Valid()
            return next(val)
        }
    }

   
    async getUsers(req, res, next) {
        try {
            res.json(['123', '456'])

        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = new UserController();   