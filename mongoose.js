var mongoose=require('mongoose');
mongoose.connect('mongodb://Petro:1105vfhfn@ds237192.mlab.com:37192/mybase');
console.log('mongoDb conect');
module.exports=mongoose;