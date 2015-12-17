$(window).load(function(){
$('#myModal').modal('show');
});
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
            .when('/tanktops', 
              {
              templateUrl : 'pages/tanktops.html',
              controller  : 'tanktopsController'
              })
                .when('/sweater', 
              {
              templateUrl : 'pages/sweaters.html',
              controller  : 'sweaterController'
              })
         .when('/winter', 
              {
              templateUrl : 'pages/pant.html',
              controller  : 'pantController'
              })
           .when('/spring', 
              {
              templateUrl : 'pages/shoe.html',
              controller  : 'shoeController'
              })
        .when('/input', 
              {
              templateUrl : 'pages/input.html',
              controller  : 'inputController'
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

ngDemo.controller('tanktopsController', function($scope)
    {
    $scope.characters =
        [
            {
     
            }
        ];
   });
ngDemo.controller('sweaterController', function($scope)
    {
    $scope.sweaterclothes =
        [
            {
                articleOfClothing: "Mystery Sweater",
                price: "$10.00",
                image: "Images/fallmysterysweater.jpg"
            },
                    {
                articleOfClothing: "Pineapple Sweatshirt",
                price: "$15.00",
                image: "Images/pineapplesweater.jpg"
            },
                    {
                articleOfClothing: "Pink and Purple TieDye Sweatshirt",
                price: "$12.25",
                image: "Images/tiedyesweater.jpg"
            },
                    {
                articleOfClothing: "Vintage Sweater",
                price: "$20.00",
                image: "Images/fallsweater.jpg"
            },
                    {
                articleOfClothing: "Mickey Flower Sweatshirt",
                price: "$10.00",
                image: "Images/mineysweater.jpg"
            },
                    {
                articleOfClothing: "West Coast Vintage Sweater",
                price: "$25.00",
                image: "Images/westcoastsweater.jpg"
            },
        ];
   });
ngDemo.
ngDemo.controller('pantController', function($scope)
    {
    $scope.characters =
        [
            {
            
            }
        ];
   });
ngDemo.controller('shoeController', function($scope)
    {
    $scope.characters =
        [
            {
            
            }
        ];
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

$(document).on('click','.navbar-collapse.in',function(e)
    {
    if( $(e.target).is('a') ) 
        {
        $(this).collapse('hide');
        }
    });
