const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

// Generate access token
const bcryptPassword = async (Password) => {
  try {
    const hashPassword = bcrypt.hash( Password, 10 );
    return hashPassword
  } catch (error) {
    console.log(error);
    
  }
}

// Generate access token
const generateAccessToken = async (Email_Adress, Telephone) => {
  const accessTooken = jwt.sign(
    {
      Email_Adress,
      Telephone
    },
    process.env.ACCESS_SECRET_TOKEN,
    { expiresIn: process.env.EXPIRE_ACCESS_TOKEN }
  );

  return accessTooken;
  
};

module.exports = {bcryptPassword, generateAccessToken}