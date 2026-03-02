const express = require('express');
const homeRoute = require('./routes/home');
const contactRoute = require('./routes/contact');
const root = require('./utils/path.js')

const app = express();

app.use( (req , res , next )=>{
  console.log(req.url, req.method);
 
  next();
})

// app.use((req , res , next) =>{
//   console.log('This is the second  middleware');
//   next();
// })

// app.use((req , res , next) =>{
//   console.log('This is the third  middleware');
//   res.send('Hello World from third middleware');
  
// })

app.use(homeRoute);

app.use(express.urlencoded());

app.use(contactRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(root + '/views/error.html');
});


const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});