


 module.exports.saveFormData = function(formData,db,cb){
   db.collection('users').insertOne(formData,function(err,saveinfo){
     if(err){
       return cb(err)
     }
     else{
       return cb(saveinfo)
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

 module.exports.deleteUserById = function(userId,db,cb{
	 db.collection('users').deleteOne({_id:userId},function(err,success){
		 if(err) throw err;
		 return cb(success)
	 })
 })