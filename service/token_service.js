const jwt = require('jsonwebtoken');
const tokenModel = require('../models/token_model')

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: "5m"})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: "10m"})

        return {accessToken, refreshToken}
    }

    async saveToken(id, refreshToken) {
        const tokenData = await tokenModel.findOne({where: {id: id}})
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            console.log("Token ID Exists")
            return tokenData.save();
        }
        console.log("No such Token")
        const token = await tokenModel.create({id: id, refreshToken})
        console.log(token)
        return token;
    }
}

module.exports = new TokenService();