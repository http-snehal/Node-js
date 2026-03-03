const fs = require('fs');
const path = require('path');
const rootDir = require("../utils/utiils");
const homes = []; 

//fake database

module.exports = class Home {
    constructor(housename, location, price, photoUrl) {
        this.housename = housename;
        this.location = location;
        this.price = price;
        this.photoUrl = photoUrl;
    } 
  
  save (){
      homes.push(this);

      const filepath = path.join(rootDir, 'data', 'data.json');
      fs.writeFile(filepath, JSON.stringify(homes), (err) => {
          if (err) {
              console.error('Error writing to file:', err);
          } else {
              console.log('Home data saved successfully!');
          }
      });
    } 


  static fetchAll() {     
     return homes;
    }
  
  
  
  }

    
