"use strict";

var express = require('../config/express');

var app = express();

app.listen(3000);
module.exports = app;

console.log('Server running at %o', 'http://localhost:3000');