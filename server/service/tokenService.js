const jwt = require('jsonwebtoken');
const tokenModel = require('../models/tokenModel')

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: "50m"})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: "10m"})

        return {accessToken, refreshToken}
    }

    async saveToken(id, refreshToken) {
        const tokenData = await tokenModel.findOne({where: {id: id}})
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        // Create new token, because no token was found
        const token = await tokenModel.create({id: id, accessToken})
        return token;
    }
}

module.exports = new TokenService();