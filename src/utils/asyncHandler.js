const { ApiError } = require("./ApiError");

const asyncHandler = (fun = ()=>{}) => {
  return async (req, res, next) => {
    try {
      await fun(req, res, next)
    } catch (error) {
      new ApiError(false, null, 500, "Async handler error : "+error )
    }
  }
}
module.exports = {asyncHandler}
