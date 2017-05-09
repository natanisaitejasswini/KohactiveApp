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

		//Publishing post by admin
		publish_post: function(request, response){
	      // console.log('.........Publishing.....', request.body);
	      Post.findOne({_id:request.body.post}, function(err,results){
	      	console.log(results);
	        results.status = request.body.status;
	        console.log(results.status);
	        results.save(function(err){
	          if(err){
	            console.log("something went wrong");
	          } else {
	            response.json(results)
	          }
	        });
	        console.log('Finall posts will be with Published by admin', results)
	      })
    	},

    	// Destroy the post
    	destroy: function(request, response){
	      Post.remove({_id:request.params.id}, function(err,post){
	      	//Whatever id we are passing through routes it deletes that psots
	        if(err) request.json(err)
	        else response.json({'status':true})
	      })
    	},

		}
})()
