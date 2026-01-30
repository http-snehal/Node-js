console.log(`hello`);

const fs = require(`fs`);

fs.writeFile(`output.txt`, `Writing file`, (err) => {
  if (err) console.log("error");
  else console.log(`file is written`) ;
})

