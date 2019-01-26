const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname + '/static');
const http = require('http');
var app = express();
var server = http.createServer(app);
const socketIo = require('socket.io');
var port = process.env.PORT || 3000;
const io = socketIo(server);


app.use(express.static(publicPath));

io.on('connection', ()=> {
    console.log('a user connected');
});

server.listen(port, ()=> {
    console.log('Server is running on port: ' + port);
});
