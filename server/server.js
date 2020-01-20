// node core libraries
const path = require('path');

// side libraries
const express = require('express');

// server config
const publicPath = path.join(__dirname + '/static');
const port = process.env.PORT || 8000;
const app = express();

// server middleware
app.use(express.static(publicPath));

app.listen(port, ()=> {
    console.log('Server is running on port: ' + port);
});
