var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');

var app = express();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../')));

// Routes
require('./routes.js')(app);

// Listen
var port = process.env.PORT || 8080;
app.listen(port);
console.log('Listening on port:', port);
