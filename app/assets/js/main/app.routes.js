(function(){
    angular.module('app.routes', ['ngRoute'])
        .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);

            $routeProvider
                .when('/', {
                    templateUrl: 'templates/home.tpl.html'
                    , controller: 'HomeController'
                })
                .when('/about', {
                    templateUrl: 'templates/about.tpl.html'
                    , controller: 'AboutController'
                })
                .when('/contact', {
                    templateUrl: 'templates/contact.tpl.html'
                    , controller: 'ContactController'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }])
})();