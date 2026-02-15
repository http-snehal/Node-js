const sum = (req , res) =>{
  console.log(req.url, req.method);


  const body = [];

  req.on('data', (chunk) => {
    console.log(chunk);
    body.push(chunk);
  });




  req.on('end', () => {
    const fullBody = Buffer.concat(body).toString();
    console.log(fullBody);
    const parsedBody = new URLSearchParams(fullBody);
    console.log(parsedBody);
    const bodyObject = Object.fromEntries(parsedBody);
    console.log(bodyObject);

   const result = Number(bodyObject.num1) + Number(bodyObject.num2);
   console.log(result);


     res.setHeader('Content-Type', 'text/html');
   res.write(`<h1>Result: ${result}</h1>`);
   res.write('<a href="/calculator">Go back to Calculator</a>'); 
    return res.end();
  
});





}

module.exports = sum;


  

     




