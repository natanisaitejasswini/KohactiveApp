app.controller('dashboardController', function(usersFactory, $location,$cookies){
	var self = this;
	self.user_session = {}

	self.user_session = $cookies.getObject('user');
	if(!self.user_session || !self.user_session.id){
		$location.url('/index');
		return 
	}
	
	// Add question link redirect to next page
	self.createpost = function(){
		$location.url('/new_post')
	}

  	// Logout function
	self.logout = function(){
	    usersFactory.logout(function(data){
	     $cookies.remove('user')
	      $location.url('/index');
	    })
  	}

})