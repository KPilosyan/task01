const GeneralError = require('./general_error');

class UnautherizedError extends GeneralError {
    constructor(message="Unautherized", status = 401, name='Unautherized') {
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

module.exports = UnautherizedError;