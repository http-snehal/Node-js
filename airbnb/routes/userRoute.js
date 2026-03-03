const express = require("express");
const userRoute = express.Router();
const addHomeController = require("../controller/addHome");

userRoute.get('/', addHomeController.getHome);

module.exports = userRoute;