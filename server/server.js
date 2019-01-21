const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname + '/static');
var port = process.env.port || 3000;

var app = express();

app.use(express.static(publicPath));

app.listen(port, ()=> {
    console.log('Server is running on port: ' + port);
});