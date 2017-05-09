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

	// Showing all posts on dashpage
	var index = function(){
	   	postFactory.index(function(data){
	      self.posts = data
	    })
  	}
  	index();

  	// Logout function
	self.logout = function(){
	    usersFactory.logout(function(data){
	     $cookies.remove('user')
	      $location.url('/index');
	    })
  	}

})