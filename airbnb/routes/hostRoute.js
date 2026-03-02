const path = require("path");
const express = require("express");


const hostRoute = express.Router();


hostRoute.get('/add-home', (req, res, next) => {

  res.sendFile(path.join(__dirname, '../views/addHome.html'));

});
   


hostRoute.post('/add-home', (req, res, next) => {
  console.log('Form submitted successfully', req.body);
  res.sendFile(path.join(__dirname, '../views/homeAdded.html'));
});

module.exports = hostRoute;