const express = require("express");
const storeRoute = express.Router();
const storeController = require("../controller/store-controller");

storeRoute.get('/', storeController.getHome);

module.exports = storeRoute;