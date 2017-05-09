console.log('postss controller......');
require('../config/mongoose');
var mongoose = require('mongoose');
var Post = mongoose.model('Post');

module.exports = (function(){
	return{
		index: function(request,response){
			Question.find({}, function(err,results){
				response.json(results)
			})
		},
		// Creating New Post
		create: function(request,response){
			var question = new Question(request.body)
			question.save(function(err){
				if(err) response.json(err)
				else{
					console.log('DB Push')
					response.json({'status': true})
				} 		
			})
		},
