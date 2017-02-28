angular.module('myBloger.admin.controllers', []).controller('AdminController', ['$scope', function($scope) {



}]).controller('PostCreationController', ['$scope', '$http', '$state', '$stateParams', function($scope, $http, $state, $stateParams) {

    $scope.buttonText = "Create";
    $scope.post = {};
    $scope.savePost = function() {
        $scope.buttonText = "Saving...";
        $scope.post.permalink = angular.lowercase($scope.post.title).replace(/[\s]/g, '-');
        $http.post('app/backend/httprequests.php?action=new', $scope.post).then(function() {
            $state.go('admin.postViewAll');
        });
    }

}]).controller('PostUpdateController', ['$scope', '$http', '$state', '$stateParams', function($scope, $http, $state, $stateParams) {

    $scope.buttonText = "Update";
    $http.get("app/backend/httprequests.php?action=one&id=" + $stateParams.id).then(function(response) {
        $scope.post = response.data[0];
    });
    $scope.updatePost = function() {
        $scope.buttonText = "Updating...";
        $http.post("app/backend/httprequests.php?action=update&id=" + $stateParams.id, $scope.post).then(function() {
            $state.go('admin.postViewAll');
        });
    }

}]).controller('PostListController', ['$scope', '$http', '$state', '$stateParams', function($scope, $http, $state, $stateParams) {

    $http.get("app/backend/httprequests.php?action=all").then(function(response) {
        $scope.blogs = response.data;
    });
    $scope.deletePost = function(id) {
        $http.get("app/backend/httprequests.php?action=del&id=" + id).then(function() {
            $state.go('admin.postViewAll', undefined, {
                reload: true
            });
        });
    }
}]);
