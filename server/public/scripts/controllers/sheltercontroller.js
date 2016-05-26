myApp.controller('ShelterController', ['$scope', '$http', function($scope, $http)

{
  var key = 'f36fcd38aad43d04c6b9042c01e91da5';
  var baseURL = 'http://api.petfinder.com/';

  $scope.zip = '';
  $scope.getShelters = function() {
    var query = 'shelter.find';
    query += '?key=' + key;
    query += '&location=' + $scope.zip;
    query += '&format=json';


    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log(response.data);
        $scope.shelters = response.data.petfinder.shelters.shelter;

      }
    )
  }


}]);
