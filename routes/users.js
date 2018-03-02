const User = require('./../models/form');
const express = require('express');
var app = express.Router();
  app.get('/', function (req, res) {
    res.send("welome")
  });
  app.post('/saveFormData', function (req, res) {
    let user = new User();
    user.firstname = req.body.firstname;
    user.middlename = req.body.middlename;
    user.lastname = req.body.lastname;
    user.mobilenumber  = req.body.mobile;
    user.description  = req.body.description;
    user.empid  = req.body.empid;
    user.email  = req.body.email;
    user.roles  = req.body.roles;
    user.save(function(err,saveinfo){
      if(err){
        res.send(err)
      }
      else{
        res.json({result:'save success',data:saveinfo})
      }
    })
  });
  app.get('/getUserInfo', function (req, res) {
    User.find({},function(err,result){
      if(err){
        res.send(err)
      }
      else{
        res.json({result:'fetch success',usersdata:result})
      }
    })
  });
module.exports = app;
