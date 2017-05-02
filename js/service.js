angular.module('gameApp')
.factory('gameAppService',function($http){
	function searchGames (nameGame){
   var urlSearchGames = 'https://floating-mountain-70543.herokuapp.com/search/?api_key=be78ab7bb822bf90173073ba3336431b403e1ce5&format=json&query='+nameGame+'&resources=game' 
			console.log(urlSearchGames)
			return $http.get(urlSearchGames)

	}
	return { searchGames: searchGames }

})