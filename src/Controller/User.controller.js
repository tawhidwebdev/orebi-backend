const { asyncHandler } = require("../utils/asyncHandler");
const { usermodel } = require("../Modle/User.modle")
const { ApiError } = require("../utils/ApiError");
const { ApiResponse } = require("../utils/ApiResponse");

/**
 * todo: CreateUser controller implement
 * @param {{req.body}} req
 * @param {{ }} res
 */

const CreateUser = asyncHandler (async(req, res)=>{
  const {FirstName, LastName, Email_Adress, Telephone, Address1, Address2, City, Post_Code, Distict, Password} = req?.body
  // console.log(FirstName, LastName, Email_Adress, Telephone, Address1, Address2, City, Post_Code, Distict, Password);
  if (!FirstName) {
    res.status(404).json(new ApiError(false, null, 400, `First name is required!`))
  }
  if (!LastName) {
    res.status(404).json(new ApiError(false, null, 400, `Last name is required!`))
  }
  if (!Email_Adress) {
    res.status(404).json(new ApiError(false, null, 400, `Email address is requierd`))
  }
  if (!Telephone) {
    res.status(404).json(new ApiError(false, null, 400, `Telephone number is required`))
  }
  if (!Address1) {
    res.status(404).json(new ApiError(false, null, 400, `Address1 is required`))
  }
  if (!Address2) {
    res.status(404).json(new ApiError(false, null, 400, `Address2 is required`))
  }
  if (!City) {
    res.status(404).json(new ApiError(false, null, 400, `City is required`))
  }
  if (!Post_Code) {
    res.status(404).json(new ApiError(false, null, 400, `Post code is required`))
  }
  if (!Distict) {
    res.status(404).json(new ApiError(false, null, 400, `Distict is required`))
  }
  if (!Password) {
    res.status(404).json(new ApiError(false, null, 400, `Password is required`))
  }
  

  // Send information into 
  const Users = await usermodel({
    FirstName, LastName, Email_Adress, Telephone, Address1, Address2, City, Post_Code, Distict, Password
  }).save()
  if(Users) {
    return res.status(200).json(new ApiResponse(true, Users, 200, `Registration successfull`))
  }

  // try {
  //   const Users = await usermodel({
  //     FirstName, LastName, Email_Adress, Telephone, Address1, Address2, City, Post_Code, Distict, Password
  //   }).save()
  //   if (Users) {
  //     return  res.status(200).json(new ApiResponse(true, Users, 200, null, `Registration successfull`))
  //   }
  // } catch (error) {
  //   console.log(error.message);
    
  // }
  
})

module.exports = { CreateUser };
