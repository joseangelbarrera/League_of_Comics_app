angular.module('gameApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/templates/index.html',
                controller: 'homeController'
            })
            .when('/game_search', {
            	templateUrl: 'templates/game_search.html',
            	controller:
            })
            .when('/game-info', {
            	templateUrl: '/templates/game-info.html'
            	controller:
            })
    })