const http = require(`http`);
const fs = require(`fs`);

function requestListener(req , res){
console.log(req.url , req.headers , req.method);

if(req.url === '/'){
  res.setHeader('Content-Type' , 'Text/html')
  res.write('<h1>This the form</h1>' );
  res.write('<form action="/submit-detail" method="POST">');
  res. write('<input type="text" id="name" name="name" placeholder="Enter yourname"><br><br>');
 res.write('<label for="gender">Gender :</label>');
 res.write('<input type="radio" id="male" name="gender" value="male">' ) ;
 res.write('<label for="male">Male</label>');
 res.write('<input type="radio" id="female" name="gender" value="female">' ) ;
 res.write('<label for="female">Female</label><br><br>');
 res.write('<button type="submit">Submit</button>');
 res.write('</form>' );
  
return res.end();
}

else if(req.url === '/submit-detail' && req.method === 'POST'){
  fs.writeFileSync('output.text' , 'Done' );
  res.statusCode = 302;
  res.setHeader('Location' , '/');
  return res.end();
}
  


}

const server = http.createServer(requestListener);

let PORT = 3003;

server.listen(PORT , ()=>{
  console.log(`the server is running on the http://localhost:${PORT}`);
})