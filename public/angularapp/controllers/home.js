//var app = angular.module("testApp",[]);
app.controller('homeController',function($scope,$http,$state,$stateParams){
  $scope.obj = {};
  $scope.saveFormData = function(obj){
    $http({method: 'POST', url: 'users/saveFormData', data:obj})
    .then(function successCallback(data) {
      console.log(data);
      if(data.data.result=="save success"){
        $scope.obj={};
        $state.go('dashboard');
      }
    },
    function errorCallback(data) {
      console.log(data)
    });
  }
})

app.controller('dashboardController',function($scope,$http){
  $scope.users={};
  $http({method: 'GET', url: 'users/getUserInfo'})
  .then(function successCallback(data) {
    console.log(data);
    $scope.users = data.data.usersdata;
  },
  function errorCallback(data) {

  });

  $scope.showUser = function(user){
    console.log(user);
  }
})