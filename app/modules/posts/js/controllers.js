angular.module('myBloger.posts.controllers', []).controller('PostController', ['$scope', '$http', function($scope, $http) {

    $http.get('app/backend/httprequests.php?action=all').then(function(response) {
        $scope.posts = response.data;


    });

}]).controller('PostDetailsController', ['$stateParams', '$state', '$scope', '$http', function($stateParams, $state, $scope, $http) {
    $scope.closePost = function() {
        $state.go('allPosts');
    };
    $http.get('app/backend/httprequests.php?action=one&id=' + $stateParams.id).then(function(response) {
        $scope.singlePost = response.data[0];
    });
}]);
