var ngDemoApp = angular.module('ngDemoApp', ['ngRoute']);

ngDemoApp.config(function($routeProvider) 
    {
    $routeProvider
        .when('/', 
              {
              templateUrl : 'pages/home.html',
              controller  : 'mainController'
			  })
        .when('/about', 
              {
              templateUrl : 'pages/about.html',
              controller  : 'aboutController'
			  })
        .when('/contact', 
              {
              templateUrl : 'pages/contact.html',
              controller  : 'contactController'
              });
	});

ngDemoApp.controller('mainController', function($scope) 
    {
    $scope.message = 'Everyone come and see how good I look!';
	});

ngDemoApp.controller('aboutController', function($scope) 
    {
    $scope.message = 'Look! I am an about page.';
	});

ngDemoApp.controller('contactController', function($scope) 
    {
    $scope.message = 'Contact us! JK. This is just a demo.';
	});