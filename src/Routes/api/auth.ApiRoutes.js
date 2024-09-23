const express = require('express');
const {Router} = express;
const {ApiResponse} = require('../../utils/ApiResponse.js')
const _ = Router();

_.route("/getname").get((req, res)=>{
  res.status(200).json(new ApiResponse(true, "Mern-2306", false, "Everything is fair and war"))
})

module.exports = _