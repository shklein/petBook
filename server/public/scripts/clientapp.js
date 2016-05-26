var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: '/views/home.html',
    controller: "HomeController"
  })
  $routeProvider
    .when('/dogs', {
      templateUrl: '/views/dogs.html',
      controller: "DogsController"
    })
    .when('/cats', {
      templateUrl: '/views/cats.html',
      controller: "CatsController"
    })
    .when('/rabbits', {
      templateUrl: '/views/rabbits.html',
      controller: "RabbitsController"
    })
    .when('/shelters', {
      templateUrl: '/views/shelters.html',
      controller: "ShelterController"
    })
    .otherwise({
      redirectTo: 'home'
    })
}]);
