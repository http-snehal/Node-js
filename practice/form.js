const fs = require(`fs`);

const requestListener = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "Text/html");
    res.write("<h1>This the form</h1>");
    res.write('<form action="/submit-detail" method="POST">');
    res.write(
      '<input type="text" id="name" name="name" placeholder="Enter yourname"><br><br>',
    );
    res.write('<label for="gender">Gender :</label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label><br><br>');
    res.write('<button type="submit">Submit</button>');
    res.write("</form>");

    return res.end();
  } else if (req.url === "/submit-detail" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);

      const parsedBoddy = new URLSearchParams(fullBody);

      // const bodyObject = {};

      // for(const[key , value] of parsedBoddy){
      //   bodyObject[key] = value;

      // }
      const bodyObject = Object.fromEntries(parsedBoddy);
      console.log(bodyObject);

      fs.writeFileSync("output.text", JSON.stringify(bodyObject));
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
};

module.exports = requestListener;
