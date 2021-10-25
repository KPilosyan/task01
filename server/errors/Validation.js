const GeneralError = require('./GeneralError');

class Validation extends GeneralError {
  constructor(name = 'Validation Error', message = 'something went wrong', status = 500) {
    super(name, message, status);
    this.name = name;
    this.message = message;
    this.status = status;
  }

  toErrorObject() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
    };
  }
}

module.exports = Validation;
