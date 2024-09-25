const {asyncHandler} = require ('../utils/asyncHandler')
const {ApiError} = require ('../utils/ApiError')
const {ApiResponse} = require ('../utils/ApiResponse')

/**
 * todo: CreateUser controller implement 
 * @param {{req.body}} req
 * @param {{ }} res
 */

const CreateUser = asyncHandler ((req, res)=>{
  const {FirstName, Email_Adress, Telephone, Address1, Address2, City, Post_Code, Division, Distict, Password} = req?.body
  console.log(FirstName, Email_Adress, Telephone, Address1, Address2, City, Post_Code, Division, Distict, Password );
  
})


module.exports = { CreateUser };
