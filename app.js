const express = require('express');
const rateLimit = require('express-rate-limit');
const controller = require('./controllers/controller');
require('express-async-errors');

const logger = async (req, res, next) => {
  console.log(`Richiesta ${req.body}`);
  await next();
};

const limiter = rateLimit({
  windowMs: 60000, // 1 minute
  max: 300, // limit each IP to 300 requests per windowMs
});

const app = express();
const port = 9999;
app
  .use(limiter)
  .use(logger)
  .use(express.static(__dirname + '/public'))
  .use(express.urlencoded({ extended: true }))
  .set('view engine', 'ejs');

// use controller
controller(app);

app.listen(port, () => {
  console.log(`Avviato server @ http://localhost:${port}`);
});
