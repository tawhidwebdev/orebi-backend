const { ApiError } = require("./ApiError");

const asyncHandler = (fun = ()=>{}) => {
  return async (req, res, next) => {
    try {
      await (req, res, next);
    } catch (error) {
      false, null, 500, "Async Handler Error" + error;
    }
  };
};

module.exports = {asyncHandler}
