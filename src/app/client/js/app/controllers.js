(function() {
    "use strict";

    var app = angular.module('anbu');

    app.controller('NavCtrl', function($scope) {
        $scope.logout = function() {
            console.log('logout action');
        };
    });

    app.controller('LoginCtrl', [
        '$rootScope',
        '$scope',
        function($rootScope, $scope) {
            $scope.login = function() {
                console.log('login');
                console.log('username:', $scope.username);
                console.log('password:', $scope.password);
            };
        }
    ]);

    app.controller('RegisterCtrl', [
        '$rootScope',
        '$scope',
        '$http',
        function($rootScope, $scope, $http) {
            $scope.register = function() {
                $http.post('/signup', {
                    username: $scope.username,
                    password: $scope.password,
                    repassword: $scope.repassword
                }).success(function() {
                    console.log('success');
                    console.log(arguments);
                }).error(function() {
                    console.log('error');
                    console.log(arguments);
                });
            };
        }
    ]);
})();