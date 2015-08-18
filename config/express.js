"use strict";

var express = require('express'),
    ejs = require('ejs'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

module.exports = function () {
    //  instance of express
    var app = express();

    //  set request body parser
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    //  set method override
    app.use(methodOverride());

    //  set view engine
    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    //  set static folder root
    app.use(express.static('public'));

    //  loading routes
    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/articles.server.routes.js')(app);

    return app;
};