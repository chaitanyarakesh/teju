var app = angular.module('testApp',['ui.router','angular-carousel-3d']).config(
  ["$stateProvider", "$urlRouterProvider",
    function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise("/");
      $stateProvider
        .state("home", {
          url: "/",
          templateUrl: "views/home.html",
          controller:'homeController'
        })
        .state("dashboard", {
          url: "/dashboard",
          templateUrl: "/views/dashboard.html",
		  controller : 'dashboardController'
      })
    }
  ]);
