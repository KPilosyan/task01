const GeneralError = require('./GeneralError');

const errorHandler = (err, req, res, next) => {
  if (!err) {
    console.log("error chkar")
    return next();
  }

  let errObject = {
    name: 'Error',    //ErrorCodes.E_UNKNOWN,
    status: 400,
    message: err.message,
  };
  if (err instanceof GeneralError) {
    errObject = err.toErrorObject();
  }

  return res.status(errObject.status).json({
    error: errObject,
  });
};

module.exports = errorHandler;