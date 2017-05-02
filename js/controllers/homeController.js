angular.module('gameApp')
	
  .controller('homeController', function ($scope, gameAppService){ 	// Function with '$scope'(from html) and 'gameAppService' from service.js
     $scope.gameInput = '' 	// That recives the input value from ng-model(index.html)
     $scope.searchGameButton = function() {
     	console.log("button")
          console.log($scope.gameInput)

     	gameAppService
               .searchGames($scope.gameInput)
          	.then(function (response) {
                    
          		$scope.gamelist = response.data.results
          		console.log($scope.gamelist)
          	})
          }
	})