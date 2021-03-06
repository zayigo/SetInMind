const express = require('express');
const rateLimit = require('express-rate-limit');
const config = require('./config');
const controller = require('./controllers/controller');

require('express-async-errors');

process.env.NODE_ENV = 'development';

const limiter = rateLimit({
  windowMs: 60000, // 1 minute
  max: 300, // limit each IP to 300 requests per windowMs
});

const app = express();
app
  .use(limiter)
  .use(express.static(`${__dirname}/public`))
  .use(express.json())
  .set('view engine', 'ejs');

// use controller
controller(app);

app.listen(global.gConfig.node_port, () => {
  console.log(`Avviato server @ http://localhost:${global.gConfig.node_port}`);
});
