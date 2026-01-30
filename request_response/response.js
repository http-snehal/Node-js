const http = require(`http`);

function requestListener(req , res){
  console.log(req.url , req.method , req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>This is first resp</title></head>');
  res.write('<body><h1>hii</h1></body>');
  res.write('</html>');
  res.end();
  
}

const server = http.createServer(requestListener);

const PORT = 3003 ;
server.listen(PORT, () => {

  console.log(`The server is running on the http://localhost:${PORT}`);

})
