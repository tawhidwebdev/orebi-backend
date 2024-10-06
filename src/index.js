require("dotenv").config();
const { DbConnection } = require("./DatabaseConfiguration/dbconfiguration.js");
const app = require("./App.js")
// const {PasswordChecker} = require('./utils/PasswordChecker.js')

//Database connection method
DbConnection();
// PasswordChecker()
