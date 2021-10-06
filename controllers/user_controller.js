const userService = require('../service/user_service')

class UserController {
    
    async registration(req, res, next) {
        try {
            const {email, password} = req.body;
            
            const userData = await userService.registration(email, password)
            console.log('Registration Successful')
            return res.json(userData)

        } catch (err) {
            console.log(err)
        }
        next()
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body;

            const userData = await userService.login(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 *1000});  //cookie not working for now, idk why yet

            return res.json(userData)

        } catch (err) {
            console.log(err)
        }
        next()
    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            return res.json(postedProduct)

        } catch (err) {
            console.log(err)
        }
        next()
    }

    // async activate(req, res, next) {
    //     try {
    //         const putProduct = await userService.activate(req)
    //         return res.json(putProduct)

    //     } catch (err) {
    //         console.log(err)
    //     }
    //     next()
    // }

    // async refreshToken(req, res, next) {
    //     try {
    //         const deletedProduct = await userService.refreshToken(req)
    //         return res.json(deletedProduct)

    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    async getUsers(req, res, next) {
        try {
            res.json(['123', '456'])

        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = new UserController();   