
const http = require(`http`);

function requestListener(req , res){
 console.log(req.url , req.header , req.method);

if(req.url === '/'){
res.write('<h1>This is default</h1>');
return res.end () ;

}
else if(req.url === '/information'){

  res.write('<h1>Tis is info page</h1>');
  return res.end();
}
 
res.write('<h1>This is page </h1>')
res.end();


}


const server = http.createServer(requestListener)

let PORT = 3004 ;

server.listen(PORT , ()=>{
  console.log(`the server is running on http://localhost:${PORT}`) ;
})
