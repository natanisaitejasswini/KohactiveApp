app.controller('loginController', function(usersFactory,$location, $cookies){
  var self = this;
  self.user_session = {}
  self.userInfo = {};

  var myCookie = $cookies.getObject('user');
  self.user_session = myCookie;
  if(myCookie){
    if($location.url() === '/index'){
      $location.url('/dashboard');
    }
  }else{
    if($location.url() !== '/index'){
      $location.url('/index');
    }
  }

  self.login = function(){
    if(!self.userInfo.name) return;
    usersFactory.login(self.userInfo, function(data){
      // self.user_session = data
      $cookies.putObject('user',data);
      $location.url('/dashboard');
    });
  }

  self.logout = function(){
    usersFactory.logout(function(data){
      $cookies.remove('user')
      $location.url('/index');
    });
  }

});