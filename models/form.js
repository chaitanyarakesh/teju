
var mongodb = require('mongodb');


 module.exports.saveFormData = function(formData,db,cb){
	 db.collection('users').findOne({email:formData.email},function(err,result){
		 if(err){
			 console.log(err)
		 }
		 else if(result){
			 console.log("result",result)
			 db.collection('users').updateOne({email:formData.email},{$set:{firstname:formData.firstname,middlename:formData.middlename,lastname:formData.lastname}},function(err,updated){
				 if(err){
					 console.log(err)
				 }
				 else{
					 return cb('updated successfully')
				 }
			 })
		 }
		 else{
			 db.collection('users').insertOne(formData,function(err,saveinfo){
				 if(err){
				   return cb(err)
				 }
				 else{
				   return cb(saveinfo)
				 }
		   })
		 }
	 })
   

 }

 module.exports.fetchFormData = function(db,cb){
   db.collection("users").find({}).toArray(function(err, result) {
     if (err) throw err;
     console.log(result);
     return cb(result)
    // db.close();
   });
 }

 module.exports.deleteUserById = function(userId,db,cb){
	 db.collection('users').deleteOne({_id:new mongodb.ObjectId(userId)},function(err,success){
		 if(err) throw err;
		 return cb(success)
	 })
 }