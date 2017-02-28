angular.module('myBloger.posts.directives', []).directive('spbComments', ['$http', '$timeout', '$state', function($http, $timeout, $state) {
    return {
        restrict: 'AEC',
        scope: {
            postInstance: '='
        },
        replace: true,
        link: function(scope, elem, attrs) {
            $timeout(function() {      //   $timeout to get the undefined variable postInstance.id
                $http.get("app/backend/httprequests.php?action=getcomment&id=" + scope.postInstance.id).then(function(response) {
                    console.log(response.data);
                    scope.comments = response.data;
                });
            });
            scope.saveComment = function() {
                console.log(scope.postInstance.id);
                $http.post("app/backend/httprequests.php?action=setcomment&id=" + scope.postInstance.id, scope.comment).then(function() {
                    $state.go($state.current, undefined, {
                        reload: true
                    });
                });
            }
        },
        templateUrl: 'app/modules/posts/views/comments.html'
    }
}]);
