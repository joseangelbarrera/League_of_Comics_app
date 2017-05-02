angular.module('wikiGames')

.controller('searchGameController', function ($scope, searchForGame) {
    // var api_key = 'b58260fa94c1c39ad567e172feb78c7cd1088647'
    // var query = 'callofduty'
    // FIRST URL => http: //api.giantbomb.com/search/?api_key=' + api_key + '&format=json&query=' + query +"&resources=game"
    // GAME URL => http://www.giantbomb.com/api/game/3030-4725/?api_key=b58260fa94c1c39ad567e172feb78c7cd1088647'
  $scope.search = function (query) {
    console.log(query)
    searchForGame.search($scope.query)
            .then(function (response) {
	        	$scope.urlSearch = response
            })
  }
})
