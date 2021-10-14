const GeneralError = require('./general_error');

class NotFountError extends GeneralError {
    constructor(message="Not Found", status = 404, name='Not Found') {
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

module.exports = NotFountError;