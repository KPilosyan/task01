const GeneralError = require('./GeneralError');

class Internal extends GeneralError {
  constructor(message = 'Internal Error Occured', status = 500, name = 'Internal') {
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

module.exports = Internal;
