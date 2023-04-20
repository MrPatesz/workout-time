const express = require("express");
const routing = require("./routes/index");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.all("/", (_req, res, next) => {
  res.redirect("/workouts");
  return next();
});

routing(app);

app.use((err, _req, res, _next) => {
  res.end("Problem...");
  console.log(err);
});

const port = 3000;
app.listen(port, () => console.log(`Server is running on localhost:${port}`));
