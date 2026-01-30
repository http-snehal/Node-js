const http = require(`http`);
const fs = require(`fs`);

function requestListener(req , res){
console.log(req.url , req.headers , req.method);
res.setHeader('Content-type' , 'text/html');

if(req.url === '/'){

res.write('<nav>');
res.write('<a href="/home">Home</a> |');
res.write('<a href="/kids">kids</a> |');
res.write('<a href="/men">men</a> |' );
res.write('<a href="/women">women</a> |');
res.write('<a href="/cart">cart</a> |');
res.write('</nav>');

return res.end();
}

else if(req.url === '/home'){
  res.write('<h1>this is home</h1>');
  return res.end();
}

else if(req.url === '/kids'){
  res.write('<h1>this is kids</h1>');
  return res.end();
}

else if(req.url === '/men'){
  res.write('<h1>this is men</h1>');
  return res.end();
}

else if(req.url === '/women'){
  res.write('<h1>this is women</h1>');
  return res.end();
}

else if(req.url === '/cart'){
  res.write('<h1>this is cart</h1>');
  return res.end();
}


}

const server = http.createServer(requestListener);

let PORT = 3006;
server.listen(PORT , ()=>{
  console.log(`the server is running on the http://localhost:${PORT}`);
})