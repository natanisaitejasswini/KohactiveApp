var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: {type: String},
	role:{type:String, required:true}
	},{timestamps: true});
mongoose.model('users', UserSchema); 

var PostSchema = mongoose.Schema({
  name:{type:String, required:true, minlength:2},
  text:{type:String, required:true, minlength:10},
  status:{type:String}
},{timestamps:true})
var post = mongoose.model('Post', PostSchema)
