const User = require('./../models/form');
var users = {};
module.exports = function(app,db){
  const database = db;
  app.post('/saveFormData', function (req, res) {
    let user = {};
    user.firstname = req.body.firstname;
    user.middlename = req.body.middlename;
    user.lastname = req.body.lastname;
    user.mobilenumber  = req.body.mobile;
    user.description  = req.body.description;
    user.empid  = req.body.empid;
    user.email  = req.body.email;
    user.roles  = req.body.roles;
  	User.saveFormData(user,database,function(saveinfo){
  		res.json({result:'save success',data:saveinfo})
  	})
   
  });
  app.get('/getUserInfo', function (req, res) {
    User.fetchFormData(database,function(result){
      res.json({result:'fetch success',usersdata:result})
    })
  });
  
  app.post('/delteUserById',function(req,res){
	  console.log('hi')
	  console.log(req.body.userId)
	  User.deleteUserById(req.body.userId,database,function(result){
		  res.json({result:'deleted success'});
	  })
  })
}
