// Resources: https://gist.github.com/crtr0/2896891
// https://github.com/socketio/chat-example/blob/master/index.js
// http://stackoverflow.com/questions/19426882/node-js-socket-io-socket-io-js-not-found

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');

var http = require('http');
var app = express();
var requestHandler = require('./request-handler.js');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var http = require('http').Server(app);
var app = express();
var requestHandler = require('./request-handler.js');
//a new instance of socket.io is initialized by passing the http object
var io = require ('socket.io')(http);

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../')));

// Routes
require('./routes.js')(app);

//Listen for connections to io
io.on('connection', (socket) => {
  var currentRoom = 'lobby';
  socket.on('room', (room) => {
    // if user is already in a room, leave room
    // if (socket.room) {
    //   socket.leave(socket.room);
    // }
    socket.join(room);
    console.log('A user has connected to ' + room);
    currentRoom = room;
    // When a message is sent, emit only to the current room
    });

    socket.on('message', (message) => {
      console.log('Room Message: ', message);
      io.to(currentRoom).emit(message);
    });

    //Listen for disconnects from socket
    socket.on('disconnect', () => {
      console.log ('A user disconnected');
    });
});

// Listen
var port = process.env.PORT || 8080;
server.listen(port);
console.log('Listening on port:', port);

//Soc

//Listen for connections to io
io.on('connection', (socket) => {
  socket.on('room', (room) => {
    //if user is already in a room, leave room
    if (socket.room) {
      socket.leave(socket.room);
      socket.room = room;
    }
    socket.join(room);
    console.log('A user has connected to ' + room);
    //When a message is sent, emit only to the current room
    socket.on('message', (message) => {
      io.to(room).emit(message);
      //save message to database
      requestHandler.saveMessage(message);
    });
    //Listen for disconnects from socket
    socket.on('disconnect', () => {
      console.log ('A user disconnected');
    });
  });
});
