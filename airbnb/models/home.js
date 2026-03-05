const fs = require('fs');
const path = require('path');
const rootDir = require("../utils/utiils");

module.exports = class Home {
    constructor(housename, location, price, photoUrl) {
        this.housename = housename;
        this.location = location;
        this.price = price;
        this.photoUrl = photoUrl;
    }

    save() {
        const filepath = path.join(rootDir, 'data', 'data.json');
    
        fs.readFile(filepath, (err, data) => {
            let homes = [];
            if (!err) {
                homes = JSON.parse(data);
            }
            homes.push(this);
            fs.writeFile(filepath, JSON.stringify(homes), (err) => {
                if (err) console.error('Error writing to file:', err);
            });
        });
    }

    static fetchAll(callback) { // Add callback parameter here
        const filepath = path.join(rootDir, 'data', 'data.json');
        fs.readFile(filepath, (err, data) => {
            if (err) {
                return callback([]); // Send empty array if file doesn't exist
            }
            callback(JSON.parse(data)); // Send the actual data to the callback
        });
    }
};