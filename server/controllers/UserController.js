const userService = require('../service/UserService')


class UserController {
    
    async registration(req, res, next) {
        try {
            const {email, password} = req.body;
            
            const userData = await userService.registration(email, password)
            return res.json({'Registration Successful': userData})

        } catch (err) {
            return next(err)

        }
    }

    async login(req, res, next) { 
        try {
            const {email, password} = req.body;

            const userData = await userService.login(email, password);
            
            return res.json(userData.accessToken)

        } catch (err) {
            return next(err)
        }
    }
}

module.exports = new UserController();   