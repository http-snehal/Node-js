const express = require('express');

const app = express();

app.use( (req , res , next )=>{
  console.log(req.url, req.method);
 
  next();
})

app.use((req , res , next) =>{
  console.log('This is the second  middleware');
  next();
})

// app.use((req , res , next) =>{
//   console.log('This is the third  middleware');
//   res.send('Hello World from third middleware');
  
// })

app.get('/', (req, res, next) => {
  res.send('<h1>Welcome to Home Page</h1>');
});

app.get('/Contact', (req, res, next) => {
  res.send(`
    <h1>Welcome to Contact Page</h1>
    <form action="/Contact" method="POST">
      <input type="text" name="username" placeholder="Enter your name"><br>
      <input type="email" name="email" placeholder="Enter your email"><br>
      <input type="submit" value="Submit">
    </form>
    
    
    
    `);
});

app.post('/Contact', (req, res, next) => {
  res.send('<h1>Form submitted successfully</h1>');
});

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});