const express = require('express')
const {Router} = express;
const authRoutes = require('./api/auth.ApiRoutes')
const {ApiError} = require('../utils/ApiError')
const _ = Router();

_.use(process.env.BASE_URL, authRoutes)
_.use(process.env.BASE_URL, (req, res)=>{
  res.status(400).json(new ApiError(false, null, 404, "Api Route Invalid"))
})

module.exports = _;