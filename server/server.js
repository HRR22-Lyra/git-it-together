// Resources: https://gist.github.com/crtr0/2896891
// https://github.com/socketio/chat-example/blob/master/index.js

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

//Socket.io ----------------------------------------------

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
      io.to(room).emit(message):
    });
  });
  //Listen for disconnects from socket
  socket.on('disconnect', () => {
    console.log ('A user disconnected');
  });
});


/* Client-side code for dynamic room names by project:

set-up a connection between the client and the server
var socket = io.connect();

// let's assume that the client page, once rendered, knows what room it wants to join
var room = "abc123";

socket.on('connect', function() {
   // Connected, let's sign-up for to receive messages for this room
   socket.emit('room', room);
});

socket.on('message', function(data) {
   console.log('Incoming message:', data);
});

*/