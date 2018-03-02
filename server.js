const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;

const config = require('./config/db');
var MongoClient = require('mongodb').MongoClient;
const dbURI = config.dbURL;
//mongodb connection


app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json({limit: '100mb'}));

app.use(bodyParser.urlencoded({
  parameterLimit: 1000000,
  limit: '1000mb',
  extended: true
}));
MongoClient.connect(dbURI, function(err, client) {
  if(err){
    console.log(err.message);
  }
  else{
    // Database Name
    const dbName = 'myproject';
    const db = client.db(dbName);
    console.log("Mongodb connection established");
    require('./routes/users')(app,db);
    app.listen(port, function () {
      console.log(`Server Starts on ${port}`);
    });
  }

});
