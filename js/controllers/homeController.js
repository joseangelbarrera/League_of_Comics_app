angular.module('gameApp')
	
  .controller('homeController', function ($scope, gameAppService){ 	// Function with '$scope'(from html) and 'gameAppService' from service.js
     $scope.gameInput = '' 	// That recives the input value from ng-model(index.html)
     $scope.searchGame = function() {
     	console.log("button")
     	gameAppService.searchGame($gameInput)
     	.then(function (response) {
     		$scope.gamelist = response.ALGO
     		console.log($scope.gamelist)
     	})
     }
	})