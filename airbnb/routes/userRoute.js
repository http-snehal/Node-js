const express = require("express");
const userRoute = express.Router();
const path = require("path");

userRoute.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../views/home.html'));
  
});

module.exports = userRoute;