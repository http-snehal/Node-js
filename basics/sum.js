const fs = require(`fs`);

let a = 5 ;
let b = 5 ;

let sum = a+b ;

let data = `the sum is: ${sum}`;

fs.writeFile(`sum.txt` , data ,(err) => {
  if(err) throw err ;
  else console.log(`the file is written`);
})