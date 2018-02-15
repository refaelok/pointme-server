const express     = require('express');
const mongoose    = require('mongoose');
const morgan     = require('morgan');
const bodyParser  = require('body-parser');
const config      = require('./src/config');
const routes      = require('./src/controllers');
const httpHeaders = require('./src/middleware/http-headers');
const app         = express();




// Set Middleware
// =============================================================================

app.use(morgan('dev')); // log requests to the console
app.use(httpHeaders); // apply headers
app.use(bodyParser.urlencoded({ extended: true })); // configure body parser
app.use(bodyParser.json()); // configure body parser




// Connect to DB
// =============================================================================
mongoose.Promise = global.Promise;
mongoose.connect(config.mongo.dbUrl);




// Register Routs
// =============================================================================

routes(app);




// Start The Server
// =============================================================================

app.listen(config.server.port);




// Print Status to Console
// =============================================================================

console.log('Magic happens on  port' + config.server.port);

process.on('uncaughtException', function (err) {
  console.log(err);
});
