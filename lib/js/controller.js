angular.module('myapp', ['ngRoute', 'ngResource']);
angular.module('myapp')
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/home',{
    templateUrl:'views/home.html'
  }).
  when('/products',{
    templateUrl:'views/productlist.html',
    controller:'myController'
  }).
  when('/products/:id', {
    templateUrl:'views/productDetails.html',
    controller:'prodDetailController'
  }).
  otherwise({
    redirectTo:'/home'
  })
}])
.controller('myController', function ($scope, $http, dataService, $routeParams){
    
    /*Get Data From Factory
    $http.get('http://127.0.0.1/Project02/public/index.php').success(function(data){
      $scope.player = data;
    });*/

    /* Get Data From Services */
    $scope.productData = null;
    dataService.getData(function(dataResponse){
      $scope.productData = dataResponse.data;
    })
})
.controller('prodDetailController', function($scope, $routeParams, dataService){
  dataService.getData(function(dataResponse){
      $scope.productData = dataResponse.data;
      $scope.eachProduct = $scope.productData[$routeParams.id];
    })
});
