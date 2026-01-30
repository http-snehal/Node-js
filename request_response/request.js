const http = require(`http`);

function requestListener(req ,res){
  console.log(req.url , req.method ,   req.headers );
}

const server = http.createServer(requestListener);

const PORT = 3001 ;
server.listen(PORT , ()=>{
  console.log(`The server is running on http://localhost:${PORT}`);
} )
