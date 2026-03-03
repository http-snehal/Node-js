const path = require("path");
const rootDir = require("../utils/utiils");
const Home = require("../models/home"); 

exports.getAddHome = (req, res, next) => {
    res.render('addHome', { pageTitle: 'Host Your Home' });
};

exports.postAddHome = (req, res, next) => {
    const home = new Home(
        req.body.homeName, 
        req.body.location, 
        req.body.price, 
        req.body.photoUrl
    );

    home.save();
    
    res.render('homeAdded', { pageTitle: 'Success!' });
};

exports.getHome = (req, res, next) => {
    const homes = Home.fetchAll(); 
    
    res.render('home', { 
        homeList: homes 
    });
};