(function() {
    "use strict";
    angular.module("anbu")
        .config([
            "$stateProvider",
            "$urlRouterProvider",
            "$locationProvider",
            function($stateProvider, $urlRouterProvider, $locationProvider) {
                $locationProvider.html5Mode(true).hashPrefix('!');

                $urlRouterProvider.otherwise("/login");

                $stateProvider.state('anon', {
                    abstract: true,
                    template: '<ui-view/>'
                });

                $stateProvider.state('anon.login', {
                    url: "/login",
                    controller: 'LoginCtrl',
                    templateUrl: "/partials/login.html"
                });

                $stateProvider.state('anon.signup', {
                    url: "/signup",
                    controller: "RegisterCtrl",
                    templateUrl: "/partials/signup.html"
                });

                
            }
        ]);
})();