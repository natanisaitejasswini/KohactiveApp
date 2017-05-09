app.factory('postFactory', function($http,$location){
  var factory = {};
  var posts= [];
  var current_post;

  factory.index = function(callback){
    $http.get('/posts').success(function(posts){
      callback(posts);
      posts = posts
      // console.log('Question Factory', posts)
    })
  }

  //Post creating with status posted
  factory.create = function(data, callback){
    // console.log('data of posts', data);
    $http.post('/question', data).success(function(data){
      if(!data.status){
        callback(data);
      }
      else{
        // console.log(data)
        callback(data);
        // console.log('no logout')
        $location.url('/dashboard')
      }
    })
  }

  return factory
})