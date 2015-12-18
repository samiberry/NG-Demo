

$(document).on('click','.navbar-collapse.in',function(e)
    {
    if( $(e.target).is('a') ) 
        {
        $(this).collapse('hide');
        }
    });

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
        .when('/pant', 
              {
              templateUrl : 'pages/pant.html',
              controller  : 'pantController'
              })
        .when('/shoe', 
              {
              templateUrl : 'pages/shoe.html',
              controller  : 'shoeController'
              })
        .when('/accessories', 
              {
              templateUrl : 'pages/accessories.html',
              controller  : 'accessoriesController'
              });
	});

ngDemo.controller('mainController', function($scope) 
    {
    $scope.message = 'Check Out The Up To Date Fashion and Accurate Prices! All things shown are in stock in all of stores. All our "mystery" options is where we get to pick for you!';
	});

ngDemo.controller('tanktopsController', function($scope)
    {
    $scope.tanktopclothes =
        [
            {
                articleOfClothing: "Mystery Tanktop",
                price: "$10.00",
                image: "Images/mysterycroptop.jpg"
            },
                    {
                articleOfClothing: "Smiley Face Tank Top",
                price: "$15.00",
                image: "Images/smiletank.jpg"
            },
                    {
                articleOfClothing: "Vans Tank Top",
                price: "$12.25",
                image: "Images/vanstank.jpg"
            },
                    {
                articleOfClothing: "Hang Loose Tank Top",
                price: "17.50",
                image: "Images/handtank.jpg"
            },
                    {
                articleOfClothing: "White Crop Top",
                price: "$9.99",
                image: "Images/croptopwhite.jpg"
            },
                    {
                articleOfClothing: "Black Tank Top",
                price: "$10.00",
                image: "Images/blacktank.jpg"
            },
        ];
   });
ngDemo.controller('accessoriesController', function($scope)
    {
    $scope.accessories =
        [
            {
                articleOfClothing: "Alex and Ani Bangle",
                price: "$10.00",
                image: "Images/alexandani.jpg"
            },
                    {
                articleOfClothing: "Aqua Stud Earrings",
                price: "$15.00",
                image: "Images/earrings.jpg"
            },
                    {
                articleOfClothing: "Sunglasses",
                price: "$12.25",
                image: "Images/glasses.jpg"
            },
                    {
                articleOfClothing: "add me",
                price: "$20.00",
                image: "Images/fallsweater.jpg"
            },
                    {
                articleOfClothing: "Original Lokai Bracelets",
                price: "$18.00",
                image: "Images/lokai.jpg"
            },
                    {
                articleOfClothing: "Navy Blue Scarf",
                price: "$10.00",
                image: "Images/scarf.jpg"
            },
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
    $scope.pantclothes =
        [
            {
                articleOfClothing: "American Flag Shorts",
                price: "$10.00",
                image: "Images/americanflagshorts.jpg"
            },
                    {
                articleOfClothing: "Boyfriend Ripped Jeans",
                price: "$15.00",
                image: "Images/boyfriendrippedjeans.jpg"
            },
                    {
                articleOfClothing: "Joggers",
                price: "$12.25",
                image: "Images/joggers.jpg"
            },
                    {
                articleOfClothing: "Skinny Jeans",
                price: "$20.00",
                image: "Images/jeans.jpg"
            },
                    {
                articleOfClothing: "High Waisted Shorts",
                price: "$10.00",
                image: "Images/highwaistedshorts.jpg"
            },
                    {
                articleOfClothing: "Mystery Leggings",
                price: "$25.00",
                image: "Images/mysteryleggings.jpg"
            },
        ];
   });
ngDemo.controller('shoeController', function($scope)
    {
    $scope.shoes =
        [
            {
                articleOfClothing: "Uggs With Bows",
                price: "$170.00",
                image: "Images/uggsbows.jpg"
            },
                    {
                articleOfClothing: "Construction Boots",
                price: "$150.00",
                image: "Images/timbs.jpg"
            },
                    {
                articleOfClothing: "White Converse",
                price: "$60.00",
                image: "Images/convers.jpg"
            },
                    {
                articleOfClothing: "Steve Madden Combat Boots",
                price: "$180.00",
                image: "Images/combatboots.jpg"
            },
                    {
                articleOfClothing: "Mickey Flower Sweatshirt",
                price: "$10.00",
                image: "Images/mineysweater.jpg"
            },
                    {
                articleOfClothing: "Birkenstocks",
                price: "$160.00",
                image: "Images/birks.jpg"
            },
        ];
   });

