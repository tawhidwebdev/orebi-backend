const express = require('express');
const {Router} = express;
const {ApiResponse} = require('../../utils/ApiResponse.js');
const {CreateUser} = require('../../Controller/User.controller.js')
const _ = Router();

_.route("/registration").post(CreateUser)

module.exports = _