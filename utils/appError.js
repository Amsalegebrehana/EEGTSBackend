

// App Error
const AppError = function (message, statusCode) {
    Error.call(this, message);
    this.message = message;
    this.statusCode = statusCode;
    this.status = `${this.statusCode}`.startsWith("4") ? "FAIL" : "ERROR";
    this.isOperational = true;
  
  };
  
  // Export App Error
  module.exports = AppError;
  