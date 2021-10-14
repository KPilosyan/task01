class GeneralError extends Error {
  constructor(name='General Error', message, status=400){
    super()
    this.name = name;
    this.message = message;
    this.status = status;
  }
  toErrorObject() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
    }
  }
}


module.exports = GeneralError;