const http = require('http');


function requestListener (req , res){
  console.log(req.url , req.method);
  res.setHeader(`Content-Type`, `text/html`);
  res.write(`<h1>hello</h1>`);

  

}

const server = http.createServer(requestListener) ;

const PORT = 5000 ;

server.listen(PORT , () => {
  console.log(`the server is running on the http://localhost:${PORT}`) ;
})