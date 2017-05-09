app.controller('postController', function(postFactory, usersFactory ,$location, $cookies, $routeParams){
  var self = this;
   self.posts= [];
   self.users = [];
   self.user_session = {};
   self.errors = []

  self.user_session = $cookies.getObject('user');
  if(!self.user_session || !self.user_session.id){
    $location.url('/index');
    return 
  }

  // To display all posts
  var index = function(){
    postFactory.index(function(data){
      self.posts = data
    })
  }
  index();

  //Refresh of specific_question page
  if($routeParams){
    postFactory.show($routeParams.id,function(data){
      // console.log('data is is ', data)
      self.current_post = data
    })
  }

  // creating new post
  self.create = function(){
    if(!self.post) return;
    var new_post = {
      name: self.user_session.name, text: self.post, status: "Posted"}
      // console.log('print the post that is typed..', new_post)
    postFactory.create(new_post,function(data){
      if (data) {
        self.errors = data
        console.log('PC create',self.errors);
        index()
      }
      else {
        console.log('PC create if no data',data);
        index()
      }
    })
    self = ''
  }

  // Redirecting to dashboard
  self.cancel = function(){
    $location.url('/dashboard');
  }

  //LOGOUT
  self.logout = function(){
      usersFactory.logout(function(data){
       $cookies.remove('user')
        $location.url('/index');
      })
    }
});















