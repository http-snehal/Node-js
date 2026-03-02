const express = require('express');
const root = require('../utils/path.js')

const homeRoute = express.Router();

homeRoute.get('/', (req, res, next) => {
  res.sendFile(root + '/views/home.html');
});

module.exports = homeRoute;