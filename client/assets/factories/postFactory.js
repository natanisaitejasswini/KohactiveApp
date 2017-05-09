app.factory('postFactory', function($http,$location){
  var factory = {};
  var posts= [];
  var current_post;

  factory.index = function(callback){
    $http.get('/posts').success(function(posts){
      callback(posts);
      posts = posts
    })
  }

  //Post creating with status posted
  factory.create = function(data, callback){
    // console.log('data of posts', data);
    $http.post('/post', data).success(function(data){
      if(!data.status){
        callback(data);
      }
      else{
        callback(data);
        $location.url('/dashboard')
      }
    })
  }

  return factory
})