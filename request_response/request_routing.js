const http = require(`http`);

function requestListener(req , res){
  console.log(req.url , req.method , req.headers);

if(req.url === '/'){
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>This is first resp</title></head>');
  res.write('<body><h1>home page </h1></body>');
  res.write('</html>');
  return res.end();

}

else if(req.url === '/product'){
    res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>This is first resp</title></head>');
  res.write('<body><h1>this is product</h1></body>');
  res.write('</html>');
 return res.end();
}
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
