var ngDemo = angular.module('ngDemo', ['ngRoute']);

ngDemo.config(function($routeProvider) 
    {
    $routeProvider
        .when('/', 
              {
              templateUrl : 'pages/home.html',
              controller  : 'mainController'
			  })
        .when('/cost', 
              {
              templateUrl : 'pages/cost.html',
              controller  : 'costController'
			  })
        .when('/input', 
              {
              templateUrl : 'pages/input.html',
              controller  : 'inputController'
			  })
        .when('/contact', 
              {
              templateUrl : 'pages/array.html',
              controller  : 'arrayController'
              });
	});

ngDemo.controller('mainController', function($scope) 
    {
    $scope.message = 'See what cool things Angular can do!';
	});

ngDemo.controller('costController', function($scope) 
    {
    $scope.quantity = 1;
    $scope.price = 9.99;
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

//ngDemo.controller('contactController', function($scope) 
//    {
//    $scope.message = 'Contact us! JK. This is just a demo.';
//	});

ngDemo.controller('arrayController', function($scope)
    {
    $scope.chars = characters;

    var characters =
        [
            {
            firstName: "Fred",
            lastName: "Flintstone",
            image: "images/Fred.png",
            },
            {
            firstName: "Wilma",
            lastName: "Flintstone",
            image: "images/Wilma.png",
            }
        ];
   });

$(document).on('click','.navbar-collapse.in',function(e)
    {
    if( $(e.target).is('a') ) 
        {
        $(this).collapse('hide');
        }
    });