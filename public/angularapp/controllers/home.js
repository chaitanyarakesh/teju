//var app = angular.module("testApp",[]);
app.controller('homeController',function($scope,$http,$state,$stateParams){
  $scope.obj = {};
  $scope.obj = JSON.parse($stateParams.userInfo);
  $scope.saveFormData = function(obj){
    $http({method: 'POST', url: '/saveFormData', data:obj})
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

app.controller('dashboardController',function($scope,$http,$state,$stateParams){
	getUserList();
	function getUserList(){
  $scope.users={};
  
  $http({method: 'GET', url: '/getUserInfo'})
  .then(function successCallback(data) {
    console.log(data);
    $scope.users = data.data.usersdata;
  },
  function errorCallback(data) {

  });
	}
  $scope.showUser = function(user){
    console.log(user);
	$state.go('home',{userInfo:JSON.stringify(user)});
  }
  
  $scope.deleteUser = function(userId){
	  var user ={userId:userId}
	  $http({method:'POST',url:'/delteUserById',data:user})
	  .then(function(data){
		  console.log(data);
		  getUserList();
	  })
	  .catch(function(err){
		  console.log(err)
	  })
  }
})
