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

  // Showing Details of POST.....
  factory.show = function(id,callback){
    $http.get("/post/"+ id).success(function(data){
      current_post = data
      // console.log('current_question',current_question);
      callback(data)
    })
  }

  // Publishing Post by admin with status Published
  factory.create_publish = function(data, callback){
    $http.post('/publish', data).success(function(response_from_server){
      // console.log(response_from_server,'on server side')
      if(!data.status){
        callback(response_from_server)
      }
      else {
        callback(response_from_server)
      }
    })
  }

  // Destroy Question
  factory.destroy = function(id,callback){
    $http.delete("/post/"+ id).success(function(data){
      // console.log(data);
      callback()
    })
  }

  return factory
})