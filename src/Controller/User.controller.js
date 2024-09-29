const {asyncHandler} = require ('../utils/asyncHandler')
const {ApiError} = require ('../utils/ApiError')
const {ApiResponse} = require ('../utils/ApiResponse')

/**
 * todo: CreateUser controller implement 
 * @param {{req.body}} req
 * @param {{ }} res
 */

const CreateUser = async(req, res)=>{
  try {
    const {FirstName, LastName, Email_Adress, Telephone} = req.body
    console.log(FirstName, LastName, Email_Adress, Telephone);
    
  } catch (error) {
    console.log(error)
  }
}


module.exports = { CreateUser };
