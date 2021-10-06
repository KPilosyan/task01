const userModel = require('../models/user_model')
const bcrypt = require('bcrypt')
const tokenService = require('./token_service') 

class UserService {
    async registration (email, password) {
        const candidate = await userModel.findOne({where: {email: email}})
        if (candidate) {
            throw new Error('User with this email already exists')
        } 
        const user = await userModel.create({email, password})

        return {id: user.id, email: user.email}
    }

    async login (email, password) {
        const user = await userModel.findOne({where: {email: email}})
        if (!user) {
            throw new Error("This email is not registered")
        } 

        const isPasswordEqual = await bcrypt.compare(password, user.password);
        if (!isPasswordEqual) {
            throw new Error ('Wrong Password')
        }
               
        // Tokens
        const tokens = tokenService.generateTokens({id: user.id, email: user.email})
        await tokenService.saveToken(user.id, tokens.refreshToken) 

        return {...tokens, user: {id: user.id, email: user.email}}
    }
}

module.exports = new UserService(); 