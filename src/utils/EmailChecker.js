const EmailChecker = (email = "tawhid.limon@gmail.com")=>{
    const emailRegex = /^[a-z0-9]+([._-][0-9a-z]+)*@[a-z0-9]+([.-][0-9a-z]+)*\.[a-z]{2,3}$/;
    const testResult = emailRegex.test(email);
    return testResult;
}

module.exports = {EmailChecker}