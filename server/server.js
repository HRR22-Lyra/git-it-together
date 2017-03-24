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

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../')));

// Routes
require('./routes.js')(app);

//Listen for connections to chatroom
var chatroom = io.of('/io/chatroom');
chatroom.on('connection', (socket) => {
  var currentRoom = 'lobby';
  socket.on('room', (room) => {
    // if user is already in a room, leave room
    if (socket.room) {
      socket.leave(socket.room);
    }
    socket.join(room);
    console.log('A user has connected to ' + room);
    currentRoom = room;
    requestHandler.getMessages(currentRoom).then((messages) => {
      chatroom.to(currentRoom).emit('savedMessages', messages);
    });
  });

  socket.on('message', (message) => {
    requestHandler.saveMessage(message);
    chatroom.to(currentRoom).emit('message', message);
  });

  //Listen for disconnects from socket
  socket.on('disconnect', () => {
    console.log ('A user disconnected');
  });
});

//Listen for connections to deliverable
var deliverable = io.of('/io/deliverables');
deliverable.on('connection', (socket) => {
  var currentRoom = null;
  socket.on('room', (room) => {
    // if user is already in a room, leave room
    if (socket.room) {
      socket.leave(socket.room);
    }
    socket.join(room);
    currentRoom = room;
  });

  socket.on('change', (change) => {
    deliverable.to(currentRoom).emit('reload', change);
  });
});

//Listen for connections to resource
var resource = io.of('/io/resources');
resource.on('connection', (socket) => {
  var currentRoom = null;
  socket.on('room', (room) => {
    // if user is already in a room, leave room
    if (socket.room) {
      socket.leave(socket.room);
    }
    socket.join(room);
    currentRoom = room;
  });

  socket.on('change', (change) => {
    resource.to(currentRoom).emit('reload', change);
  });
});

// Listen
var port = process.env.PORT || 8080;
server.listen(port);
console.log('Listening on port:', port);
