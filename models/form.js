const mongoose = require('mongoose');
var formSchema = mongoose.Schema({
  firstname : {type:String},
  middlename : {type:String},
  lastname : {type:String},
  mobilenumber : {type:Number},
  description :{type:String},
  empid : {type:String},
  email : {type:String},
  roles : {type:String}

})

module.exports = mongoose.model('formcollection',formSchema)
