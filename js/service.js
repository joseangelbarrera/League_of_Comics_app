angular.module('gameApp')
.factory('gameAppService',function($http){
	
	function searchGames (nameGame) {
   		var urlSearchGames = 'https://api-comic-vine.herokuapp.com/search/?api_key=5b2bbe51985a5d865b541898bbd424748175b076&format=json&query='+ nameGame
		console.log(urlSearchGames)
		return $http.get(urlSearchGames)


          }
	return { 
		searchGames: searchGames, 
	
	}


})