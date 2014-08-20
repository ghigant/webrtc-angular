(function() {
    "use strict";

    angular.module('anbu')
        .directive('activeNav',[
            '$location',
            function($location) {
                return {
                    restrict: 'AM',
                    link: function(scope, element, attrs) {

                    }
                };
            }
        ])
        .directive('sameAs', function() {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function(scope, el, attrs, ctrl) {
                    console.log(scope);
                    console.log(attrs);
                    console.log(ctrl);
                    scope.$watch(attrs.ngModel, function(value) {
                        ctrl.$setValidity('sameAs', angular.equals(value, scope[attrs.sameAs]));
                        console.log(scope[attrs.sameAs]);
                        return value;
                    });

                }
            };
        });
})();