const bcrypt = require('bcrypt');

const bcryptPassword = async (Password) => {
  try {
    const hashPassword = bcrypt.hash( Password, 10 );
    return hashPassword
  } catch (error) {
    console.log(error);
    
  }
}

module.exports = {bcryptPassword}