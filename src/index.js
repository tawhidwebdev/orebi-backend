require("dotenv").config();
const { DbConnection } = require("./DatabaseConfiguration/dbconfiguration.js");
const app = require("./App.js")

//Database connection method
DbConnection();
