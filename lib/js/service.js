angular.module('myapp')
.factory("mainData", function($http) {
  return $http.get('js/data.json');
})
.service('dataService', function($http){
  this.getData = function(callbackFunc){
    $http({
      method: 'GET',
      url: 'js/data.json',
    }).then(function(data){
      callbackFunc(data);
    }).catch(function(){
      alert("Error");
    });
  }
});
