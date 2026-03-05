const path = require("path");
const rootDir = require("../utils/utiils");
const Home = require("../models/home"); 


exports.getHome = (req, res, next) => {
    // We pass a function (callback) that res.render sits inside
    Home.fetchAll((homes) => {
        res.render('store/home-list', { 
            homeList: homes,
            pageTitle: 'Home List'
        });
    });
};