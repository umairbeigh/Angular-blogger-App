angular.module('myBloger.posts', ['myBloger.posts.controllers']);
angular.module('myBloger.posts').config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
    $stateProvider.state('allPosts', {
        url: '/posts',
        templateUrl: 'app/modules/posts/views/posts.html',
        controller: 'PostController'
    });
    $stateProvider.state('singlePost', {
        url: '/posts/:id/:permalink',
        templateUrl: 'app/modules/posts/views/singlePost.html',
        controller: 'PostDetailsController'
    });
}]);
