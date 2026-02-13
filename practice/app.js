const http = require(`http`);
const requestListener = require(`./form`);


const server = http.createServer(requestListener);


let PORT = 3003;

server.listen(PORT , ()=>{
  console.log(`the server is running on the http://localhost:${PORT}`);
})