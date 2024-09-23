const chalk = require('chalk')
const express = require('express')
const AllRoutes = require('./Routes/index.js')
const app = express()

app.use(AllRoutes)

app.listen(process.env.PORT, ()=>{
  console.log(chalk.blueBright.bgCyanBright(`Server Connected on Port http://localhost:${process.env.PORT}`));
})