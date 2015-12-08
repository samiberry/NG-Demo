var ngDemo = angular.module('ngDemo', ['ngRoute']);

ngDemo.config(function($routeProvider) 
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
        .when('/input', 
              {
              templateUrl : 'pages/input.html',
              controller  : 'inputController'
			  })
        .when('/contact', 
              {
              templateUrl : 'pages/contact.html',
              controller  : 'contactController'
              });
	});

ngDemo.controller('mainController', function($scope) 
    {
    $scope.message = 'Everyone come and see how good I look!';
	});

ngDemo.controller('aboutController', function($scope) 
    {
    $scope.message = 'Look! I am an about page.';
	});

ngDemo.controller('inputController', function($scope) 
    {
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.fullName = function() 
        {
        return $scope.firstName + " " + $scope.lastName;
        }
	});

ngDemo.controller('contactController', function($scope) 
    {
    $scope.message = 'Contact us! JK. This is just a demo.';
	});

$(document).on('click','.navbar-collapse.in',function(e)
    {
    if( $(e.target).is('a') ) 
        {
        $(this).collapse('hide');
        }
    });