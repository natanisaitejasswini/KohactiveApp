var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: {type: String},
	role:{type:String, required:true}
	},{timestamps: true});
mongoose.model('users', UserSchema); 


