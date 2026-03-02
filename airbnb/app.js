const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use( (req , res, next ) => {
  console.log(req.method, req.url);
  
  next();
});

app.get('/', (req, res, next) => {
  res.send(`<h1>Welcome to Airbnb Home Page</h1>
    <a href="/add-home">Add Home</a>`);
  
});

app.get('/add-home', (req, res, next) => {

  res.send(`
    <h1>Welcome to Add Home Page</h1>
    <form action="/add-home" method="POST">
      <input type="text" name="homeName" placeholder="Enter home name"><br>
      <input type="text" name="location" placeholder="Enter location"><br>
      <input type="number" name="price" placeholder="Enter price"><br>
      <input type="submit" value="Submit">
    </form> `);
  next();

});
app.use(bodyParser.urlencoded());


app.post('/add-home', (req, res, next) => {
  console.log('Form submitted successfully', req.body);
  res.send('<h1>Home added successfully</h1>');
});


const PORT = 3006;

app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});