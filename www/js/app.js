'use strict';
// Declare the main module
var myApp = angular.module('myApp', [
    'ngRoute',
    'ngSanitize',
    'ngAnimate',
    'swipe'
]);

myApp.directive("ngTap", function($rootScope) {
    return function($scope, $element, $attributes) {
            
      $rootScope.redirectMe();
      
      var tapped;
      tapped = false;
      $element.bind("click", function() {
        if (!tapped) {
          return $scope.$apply($attributes["ngTap"]);
        }
      });
      $element.bind("touchstart", function(event) {
        return tapped = true;
      });
      $element.bind("touchmove", function(event) {
        tapped = false;
        return event.stopImmediatePropagation();
      });
      return $element.bind("touchend", function() {
        if (tapped) {
          return $scope.$apply($attributes["ngTap"]);
        }
      });
    };
  });

myApp.directive('scroll', function($rootScope) {
    return {
      link: function (scope, elem, attrs) {
        elem.on('scroll', function (e) {
          // do your thing
          //console.log($rootScope.mainCat);          
          $rootScope.redirectMe();
        });
      }
    }
  });

var timeOutCandidate;
// Initialize the main module
myApp.run(['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {

    'use strict';

    /**
     * Helper method for main page transitions. Useful for specifying a new page partial and an arbitrary transition.
     * @param  {String} path               The root-relative url for the new route
     * @param  {String} pageAnimationClass A classname defining the desired page transition
     */
    $rootScope.go = function (path, pageAnimationClass) {
        if (typeof(pageAnimationClass) === 'undefined') { // Use a default, your choice
            $rootScope.pageAnimationClass = 'crossFade';
        }
        
        else { // Use the specified animation
            $rootScope.pageAnimationClass = pageAnimationClass;
        }

        if (path === 'back') { // Allow a 'back' keyword to go to previous page
            $window.history.back();
        }
        
        else { // Go to the specified path
            $location.path(path);
        }
        //$rootScope.redirectMe();
    };
    $rootScope.mainCat=[
      {
        title:"Medleys",
        color:"#013711"
      },
      {
        title:"Noble Nuts",
        color:"#03203b"
      },
      {
        title:"Delicacies",
        color:"#400721"
      }
    ]

    $rootScope.timeOutMe=35000;
    $rootScope.redirectMe = function ()
    {
    /////////////////////security
        if(timeOutCandidate)
        clearTimeout(timeOutCandidate);
        timeOutCandidate = setTimeout(function () {
            //$rootScope.redirectMe();

            //redirect me
           // window.location = "#/0";

        }, $rootScope.timeOutMe);
    //end 
    }
    $rootScope.redirectMe();
}]);

// Configure the main module
myApp.config(['$routeProvider', function ($routeProvider) {

    'use strict';

    $routeProvider
        .when('/0', {
            templateUrl: 'pages/intro.html'
        })
        .when('/1', {
            templateUrl: 'pages/main.html'
        })
        .when('/2', {
            templateUrl: 'pages/category.html'
        })
        .when('/3/:productId?', {
            templateUrl: 'pages/product.html',            
            controller: 'productCtrl'
        })
        
        .otherwise({
           templateUrl: 'pages/intro.html' 
        });
}]);

///////////////////////////////////////////////////////////////////
///////////////////// productCtrl ///////////////////////////////////
///////////////////////////////////////////////////////////////////
myApp.controller('productCtrl', function ($rootScope, $scope, $http, $routeParams, $timeout) {
  $scope.catId = $routeParams.productId;
  $scope.itemList=[];
  $scope.activeItem=1000;
  $scope.setActiveTab=function(index){
    $scope.activeItem=index;
  }
  $scope.swipeLeft = function(index) {
    console.log("swipeMe Left:::"+index);
    $scope.activeItem=index;
  }
  $scope.swipeRight = function(index) {
    console.log("swipeMe right::::"+index);
    $scope.activeItem=1000;
  }

  $http.get("products.js").success(function (data) {
    console.log(data);
    for(var i=0;i<data.length;i++)
    {
      if(data[i].cat == $scope.catId)
        $scope.itemList.push(data[i]);
    }

  });


});