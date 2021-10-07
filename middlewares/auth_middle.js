const jwt = require("jsonwebtoken");

module.exports = () => {
    return (req, res, next) => {

        // Find JWT in Headers
        const token = req.headers["authorization"]
        if (!token) {
            return res.status(401).send("No access token provided")
        }
        else{
            // JWT Validation 

            const tokenBody = token.slice(7)  //Takes out 'Bearer' part 
            jwt.verify(tokenBody, process.env.JWT_ACCESS_SECRET, (err, decoded) => {
                if (err) {
                    return res.status(401).send(err.message)
                }
            })
            next()
        }
    }
}