const express = require("express");
const hostRoute = express.Router();
const addHomeController = require("../controller/addHome");


hostRoute.get('/add-home', addHomeController.getAddHome);


hostRoute.post('/add-home', addHomeController.postAddHome);

module.exports = hostRoute;