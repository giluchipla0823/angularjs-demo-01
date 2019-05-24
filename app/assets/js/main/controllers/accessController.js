(function () {
    angular.module('access.controllers', [])
        .controller('LoginController', ['$scope', function ($scope) {
            console.log('Load login controller');

            $scope.form = {
                data: {}
            };

            $scope.login = function () {
                console.log('LOGIN');
            }
        }])
        .controller('SignupController', ['$scope', function ($scope) {
            console.log('Load signup controller');
            
            $scope.form = {
                data: {}
            };

            $scope.signup = function () {
                console.log('SIGNNUP');
            }
        }]);
})();