angular.module('myapp')
.service('appService',function($http){
    console.log('this is app service!');
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