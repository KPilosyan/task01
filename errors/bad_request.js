const GeneralError = require('./general_error');

class BadRequestError extends GeneralError {
    constructor(message="Bad Request", status = 400, name='Bad Request') {
      super(name, message, status)
      this.name = name;
      this.message = message;
      this.status = status 
  }

  toErrorObject() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
    }
  }

};

module.exports = BadRequestError;