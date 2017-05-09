console.log('postss controller......');
require('../config/mongoose');
var mongoose = require('mongoose');
var Post = mongoose.model('Post');

module.exports = (function(){
	return{
		index: function(request,response){
			Post.find({}, function(err,results){
				response.json(results)
			})
		},
		// Creating New Post
		create: function(request,response){
			var post = new Post(request.body)
			post.save(function(err){
				if(err) response.json(err)
				else{
					console.log('DB Push')
					response.json({'status': true})
				} 		
			})
		},
		//show post on new page
		show: function(request,response){
			Post.findOne({_id: request.params.id}, function(err, results){
				// console.log('Show Post Found')
				response.json(results)
			})
		},

		}
})()
