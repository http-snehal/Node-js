const express = require("express");
const path = require("path");
const userRoute = require("./routes/userRoute");
const hostRoute = require("./routes/hostRoute");
const rootDir = require("./utils/utiils"); 

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(rootDir, 'views'));


app.use("/airbnb/static", express.static(path.join(rootDir, "public")));


app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


app.use(userRoute);
app.use("/host", hostRoute);

app.use((req, res, next) => {
  res.status(404).render('error', { pageTitle: 'Page Not Found' });
});

const PORT = 3006;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});