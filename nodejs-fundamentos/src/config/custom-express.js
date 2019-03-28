const express   = require('express');
const app       = express();
const routes    = require('../app/routes/routes');

routes(app);

require('marko/node-require').install();
require('marko/express');

module.exports = app;


