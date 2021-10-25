const jwt = require('jsonwebtoken');
const BadRequest = require('../errors/Internal');

module.exports = () => (req, res, next) => {
  // Find JWT in Headers
  const token = req.headers.authorization;
  if (!token) {
    const badReqErrObj = new BadRequest('No access token provided');
    return next(badReqErrObj);
  }

  // JWT Validation

  const tokenBody = token.slice(7); // Takes out 'Bearer' part
  jwt.verify(tokenBody, process.env.JWT_ACCESS_SECRET, (err) => {
    if (err) {
      const badReqErrObj = new BadRequest(err);
      return next(badReqErrObj);
    }
    return next();
  });
  return next();
};
