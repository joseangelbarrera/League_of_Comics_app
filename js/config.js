angular.module('gameApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/templates/index.html',
                controller: 'homeController'
            })
            .when('/game-search', {
            	templateUrl: 'templates/game-search.html',
            	controller:
            })
            .when('/game-info', {
            	templateUrl: '/templates/game-info.html'
            	controller:
            })
    })

