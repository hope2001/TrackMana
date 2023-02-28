var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const cors = require('cors')

app.use(cors());
app.use(express.static('/'));

io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('offer', (data) => {
    socket.broadcast.emit('offer', data);
  });

  socket.on('initiate', () => {
    io.emit('initiate');
  });
})

http.listen(3005, () => console.log('Example app listening on port 3005!'))