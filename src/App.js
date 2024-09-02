const chalk = require('chalk')
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(process.env.PORT, ()=>{
  console.log(chalk.blueBright.bgCyanBright(`Server Connected on Port http://localhost:${process.env.PORT}`));
})