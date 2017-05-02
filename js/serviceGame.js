angular.module('wikiGames')

.factory('searchForGame', function ($http) {
  var api_key = 'b58260fa94c1c39ad567e172feb78c7cd1088647'

  function gameSearch (query) {
    var urlSearch = 'http://api.giantbomb.com/search/?api_key=' + api_key + '&format=json&query=' + query + '&resources=game'
    console.log(urlSearch)
    return $http.get(urlSearch)
  }
  return {search: gameSearch}
})
