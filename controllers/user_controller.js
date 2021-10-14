const userService = require('../service/user_service')
const NotFound = require('../errors/not_found');
const BadRequest = require('../errors/bad_request');

class UserController {
    
    async registration(req, res, next) {
        try {
            const {email, password} = req.body;
            
            const userData = await userService.registration(email, password, next)
            console.log('Registration Successful')
            return res.json(userData)

        } catch (err) {
            const BadRequestErrorObject = new BadRequest("Please Provide Valid Parameters")
            return next(BadRequestErrorObject)

        }
    }

    async login(req, res, next) { 
        try {
            const {email, password} = req.body;

            const userData = await userService.login(email, password, next);
            
            return res.json(userData.accessToken)

        } catch (err) {
            const NotFoundErrorObject = new NotFound("User Not Found")
            return next(NotFoundErrorObject)
        }
    }
}

module.exports = new UserController();   