const userModel = require('../models/user_model')
const bcrypt = require('bcrypt')
const tokenService = require('./token_service') 
const BadReqError = require('../errors/bad_request')
const NotFoundError = require('../errors/not_found')


class UserService {
    async registration (email, password, next) {
        const candidate = await userModel.findOne({where: {email: email}})
        if (candidate) {
            const badReqErrObj = new BadReqError('User Already Exists')
            return next(badReqErrObj)
        } 
        const user = await userModel.create({email, password})

        return {id: user.id, email: user.email}
    }

    async login (email, password, next) {
        const user = await userModel.findOne({where: {email: email}})
        if (!user) {
            const notFoundErrObj = new NotFoundError('This email is not registered')
            return next(notFoundErrObj)
        } 

        const isPasswordEqual = await bcrypt.compare(password, user.password);
        if (!isPasswordEqual) {
            const badReqErrObj = new BadReqError('Wrong Password')
            return next(badReqErrObj)
        }
               
        // Tokens
        const tokens = tokenService.generateTokens({id: user.id, email: user.email})
        await tokenService.saveToken(user.id, tokens.refreshToken) 

        return {...tokens, user: {id: user.id, email: user.email}}
    }
}

module.exports = new UserService(); 