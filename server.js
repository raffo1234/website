var express = require("express");
var http = require("http");
var bodyParser = require("body-parser");
require("dns-notfound-what");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var server = http.createServer(app);

var path = require("path");

var config = require("./app/config");
var port = config.port;

// HTML
app.use(express.static(path.join(__dirname, "public")));

// ROUTE
var routes = require("./app/routes/routes")(app);

server.listen(port, function () {});
