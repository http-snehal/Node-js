const sum = require('./sum');


const reqHandle = (req, res) => {
  console.log(req.url, req.method);

  if(req.url ==='/'){
    res.setHeader('Content-Type', 'text/html');
 res.write(`
  <html>
  <head>
     <title>Home Page</title>
   </head><body>
       <h1>Welcome to the Home Page</h1>
       <a href="/calculator">Go to Calculator</a>
     </body></>
  </html>`
  
   ) ;
     return res.end();

 }
  else if(req.url === '/calculator'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
  <html>
  <head>
     <title>Home Page</title>
   </head><body>
   <form action="/cal" method="POST">
       <h1>Welcome to the Calculator Page</h1>
       <input type ="number" name="num1" placeholder="Enter first number"><br><br>
       <input type ="number" name="num2" placeholder="Enter second number"><br><br>
       <button type="submit">Submit</button>
       </form>
      
     </body></>
  </html>`
  
   ) ;
     return res.end();
  }

  else if(req.url === '/cal' && req.method === 'POST'){
    sum (req, res);
    return ;
  }


  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.write('<h1>404 Not Found</h1>');
  res.write('<p>The page you are looking for does not exist.</p>');
  res.write('<a href="/">Go back to Home Page</a>');
  res.end();
}

module.exports = reqHandle;