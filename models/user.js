var mongoose=require('../mongoose');
var schemaUser=mongoose.Schema({
	name:{
		type:String,
		unique:true,
		required:true
	},
	age:{
		type:Number,
		required:true
	}
},{versionKey:false});

var User=mongoose.model("User", schemaUser);
module.exports=User;
