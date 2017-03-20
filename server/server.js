var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var http = require('http').Server(app);
var app = express();
//a new instance of socket.io is initialized by passing the http object
var io = require ('socket.io')(http);

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../')));

// Routes
require('./routes.js')(app);

// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on port:', port);

//Listen for connections to io
io.on('connection', (socket) => {
  console.log('A user has connected');
  //Listen for disconnects from socket
  socket.on('disconnect', () => {
    console.log ('A user disconnected');
  });
});