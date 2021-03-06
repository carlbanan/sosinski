
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use("/public", express.static(__dirname + "/public", {maxAge: 86400000}));
app.use("/bower", express.static(__dirname + "/bower_components"));

app.all('/', routes.index);
app.all('/about', routes.about);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});