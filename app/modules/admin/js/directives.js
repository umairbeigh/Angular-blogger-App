angular.module('myBloger.admin.directives', []).directive('helloWorld', function() {
    return {
        restrict: 'AEC',
        replace: true,
        template: '<p ng-click="clearMessage()">hello, World!{{message}}</p>',
        link: function(scope, elem, attrs) {
            scope.$watch('message', function(value) {
                console.log('Message Changed');
            });
            scope.clearMessage = function() {
                scope.message = '';
            }
            elem.bind('mouseover', function() {
                elem.css('cursor', 'pointer');
            });
        }
    }
});
