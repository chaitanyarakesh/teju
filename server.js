const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 4000;

const user = require('./routes/users');

const db = require('./config/db');
const dbURI = db.dbURL;
//mongodb connection
mongoose.connect(dbURI);
// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});
// If the connection throws an error
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json({limit: '100mb'}));

app.use(bodyParser.urlencoded({
  parameterLimit: 1000000,
  limit: '1000mb',
  extended: true
}));
app.use('/users',user)
app.listen(port, function () {
  console.log(`Server Starts on ${port}`);
});
