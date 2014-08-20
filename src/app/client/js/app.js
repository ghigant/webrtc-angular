(function() {
    "use strict";
    angular.module('anbu', ['ui.router'])
        .run([
            '$rootScope',
            '$state',
            '$stateParams',
            function($rootScope, $state, $stateParams) {
                console.log('run');
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
        }]);
})();