const http = require('http');

function Test(req, res) {
  console.log(req.url, req.method);
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Hello World</h1>');
  return res.end();

}

const server = http.createServer(Test);

let PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
