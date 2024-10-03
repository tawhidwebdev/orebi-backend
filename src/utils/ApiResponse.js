class ApiResponse {
  constructor(success, data, statusCode, error, message) {
    this.success = success,
    this.data = data,
    this.statusCode = statusCode,
    this.error = error
    this.message = message
  }
}

module.exports = {ApiResponse}