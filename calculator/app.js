const http = require('http');
const reqHandle = require('./reqHandle');


const server = http.createServer(reqHandle);

let PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
