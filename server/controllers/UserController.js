const userService = require('../service/userService')
const NotFound = require('../errors/NotFound');
const BadRequest = require('../errors/BadRequest');

class UserController {
    
    async registration(req, res, next) {
        try {
            const {email, password} = req.body;
            
            const userData = await userService.registration(email, password)
            return res.json({'Registration Successful': userData})

        } catch (err) {
            const BadRequestErrorObject = new BadRequest("Please Provide Valid Parameters")
            return next(BadRequestErrorObject)

        }
    }

    async login(req, res, next) { 
        try {
            const {email, password} = req.body;

            const userData = await userService.login(email, password);
            
            return res.json(userData.accessToken)

        } catch (err) {
            const NotFoundErrorObject = new NotFound("User Not Found")
            return next(NotFoundErrorObject)
        }
    }
}

module.exports = new UserController();   