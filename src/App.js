const chalk = require("chalk");
const express = require("express");
const cookieParser = require('cookie-parser');
const AllRoutes = require("./Routes/index.js");
const cors = require("cors");
const app = express();

//All middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(AllRoutes);

app.listen(process.env.PORT, () => {
  console.log(
    chalk.blueBright.bgCyanBright(
      `Server Connected on Port http://localhost:${process.env.PORT}`
    )
  );
});
