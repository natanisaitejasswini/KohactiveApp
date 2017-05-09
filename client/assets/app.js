var app = angular.module('app', ['ngRoute','ngCookies']);

app.config(function ($routeProvider) {
  $routeProvider
  .when('/index',{
    templateUrl: 'partials/login.html',
  })
  .when('/dashboard',{
    templateUrl: 'partials/dashboard.html'
  })
  .when('/new_post',{
    templateUrl: 'partials/new_post.html'
  })
  .otherwise({
    redirectTo: '/index'
  });
});

