(function () {
    angular.module('app.routes', ['ngRoute'])
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);

            $routeProvider
                .when('/', {
                    templateUrl: 'templates/home/home.tpl.html'
                    , controller: 'HomeController'
                })
                .when('/about', {
                    templateUrl: 'templates/about/about.tpl.html'
                    , controller: 'AboutController'
                })
                .when('/login', {
                    templateUrl: 'templates/access/login.tpl.html'
                    , controller: 'LoginController'
                })
                .when('/signup', {
                    templateUrl: 'templates/access/signup.tpl.html'
                    , controller: 'SignupController'
                })
                .when('/contact/template-validation', {
                    templateUrl: 'templates/contact/template-validation.tpl.html'
                    , controller: 'TemplateValidationController'
                    , controllerAs: 'vm'
                })
                .when('/contact/plugin-validation', {
                    templateUrl: 'templates/contact/plugin-validation.tpl.html'
                    , controller: 'PluginValidationController'
                    , controllerAs: 'vm'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }])
})();