const path = require("path");
const express = require("express");

const rootDir = require("../utils/utiils");


const hostRoute = express.Router();


hostRoute.get('/add-home', (req, res, next) => {

  res.sendFile(path.join(rootDir, 'views/addHome.html'));

});
   
const homes = [];

hostRoute.post('/add-home', (req, res, next) => {
  console.log('Form submitted successfully', req.body);
  homes.push({housename: req.body.homeName, location: req.body.location, price: req.body.price});
  console.log('Current homes:', homes);
  res.sendFile(path.join(rootDir, 'views/homeAdded.html'));
});

module.exports = hostRoute;