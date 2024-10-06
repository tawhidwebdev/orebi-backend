const PasswordChecker = (password = "Limon@321")=>{
  const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/;
  const testResult = passwordRegex.test(password)
  return testResult;
  
}

module.exports = {PasswordChecker}