const express = require('express');
const contactRoute = express.Router();
const root = require('../utils/path.js') 

contactRoute.get('/Contact', (req, res, next) => {
  res.sendFile(root + '/views/contact.html');
});

contactRoute.post('/Contact', (req, res, next) => {
  console.log('Form submitted successfully', req.body);
  res.sendFile(root + '/views/success.html');
});

module.exports = contactRoute;