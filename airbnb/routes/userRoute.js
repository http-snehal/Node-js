const express = require("express");
const userRoute = express.Router();
const path = require("path");

const rootDir = require("../utils/utiils");

userRoute.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views/home.html'));
  
});

module.exports = userRoute;