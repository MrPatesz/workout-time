const express = require("express");

const app = express();

app.all("/", (req, res, next) => {
  res.redirect("/workouts.html");
  next();
});

app.use(express.static("pages"));

const port = 3000;
app.listen(port, () => console.log(`Server is running on localhost:${port}`));
