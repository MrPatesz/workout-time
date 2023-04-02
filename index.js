const express = require('express');
const routing = require('./routes/index');

const app = express();

app.all('/', (_req, res, next) => {
  res.redirect('/workouts.html');
  return next();
});

app.use(express.static('pages'));

routing(app);

const port = 3000;
app.listen(port, () => console.log(`Server is running on localhost:${port}`));
