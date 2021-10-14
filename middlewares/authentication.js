const jwt = require("jsonwebtoken");
const BadRequestError = require('../errors/internal')
const tokenModel = require("../models/token_model")


module.exports = () => {
    return (req, res, next) => {

        // Find JWT in Headers
        const token = req.headers["authorization"]
        if (!token) {
            const badReqErrObj = new BadRequestError("No access token provided")
            return next(badReqErrObj)
        }
        else{
            // JWT Validation 

            const tokenBody = token.slice(7)  //Takes out 'Bearer' part 
            jwt.verify(tokenBody, process.env.JWT_ACCESS_SECRET, (err, decoded) => {
                if (err) {
                    const badReqErrObj = new BadRequestError(err)
                    return next(badReqErrObj)
                }
            })
            next()
        }
    }
}