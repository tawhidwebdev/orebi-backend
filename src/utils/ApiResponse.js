class ApiResponse {
  constructor(succes, data, statusCode, error, message) {
    this.succes = succes,
    this.data = data,
    this.statusCode = statusCode,
    this.error = error,
    this.message = message
  }
}

module.exports = {ApiResponse}