const express = require("express");

const path = require("path");
const userRoute = require("./routes/userRoute");
const hostRoute = require("./routes/hostRoute");

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);

  next();
});

app.use(userRoute);

app.use(express.urlencoded());

app.use("/host",hostRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views/error.html'));
});

const PORT = 3006;

app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
