app.controller('dashboardController', function(usersFactory, postFactory, $location,$cookies){
	var self = this;
	self.user_session = {}
	self.posts = []
	self.userInfo = {}

	self.user_session = $cookies.getObject('user');
	if(!self.user_session || !self.user_session.id){
		$location.url('/index');
		return 
	}
	
	// Add post link redirect to next page
	self.createpost = function(){
		$location.url('/new_post')
	}

	// Showing Post and redirecting to specific Post page
	self.show = function(info){
		id = info
		// console.log(id);
		postFactory.show(id,function(id){
			self.current_post = info
			$location.url('/post/'+self.current_post)
		})
	}

	// Showing all posts on dashpage
	var index = function(){
	   	postFactory.index(function(data){
	      self.posts = data
	    })
  	}
  	index();

  	//Admin going to approveposts page
  	self.approveposts = function(){
		// console.log("entered")
		$location.url('/approveposts')
	}

	//Going to allposts page
	self.allposts = function(){
		$location.url('/allposts')
	}


	// publishing the question from dashboard.html
	self.publish = function(info){//called from page
	    id = info
	    var new_publish = {post:info, status: "Published"}
    	postFactory.create_publish(new_publish,function(response_from_server){
	      	index(); //to refresh approveposts page on approving one
	        $location.url('/approveposts');
    	})
  	}
  	// Logout function
	self.logout = function(){
	    usersFactory.logout(function(data){
	     $cookies.remove('user')
	      $location.url('/index');
	    })
  	}

  	// Destroy Post
  	self.destroy = function(data){
      postFactory.destroy(data,index)
  	}

})