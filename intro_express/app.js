// core module
// const http = require('http');
// external module
const express = require('express');
//local module
const requestHandler = require('./user');

const app = express();
// const server = http.createServer(app);

app.use( (req , res , next )=>{
console.log('This is the first  middleware');
res.send('Hello World');
next();
})

app.use((req , res , next )=>{
  console.log('This is the second  middleware');
  next();
})


const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server running on addre  ss http://localhost:${PORT}`);
});