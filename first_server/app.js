const http = require(`http`) ;

function requestListener (req , res){
  console.log(req);
  process.exit(); //stop event loop
}

const server = http.createServer(requestListener);


const PORT = 3001;
server.listen(PORT , () =>{
  console.log(`the server is running at http://localhost:${PORT}`);
})
