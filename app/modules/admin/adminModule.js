angular.module('myBloger.admin', ['myBloger.admin.controllers']);
angular.module('myBloger.admin').config(['$stateProvider','$locationProvider', function($stateProvider,$locationProvider) {
    $stateProvider.state('admin', {
        url: '/admin',
        abstract: true,
        controller: 'AdminController',
        templateUrl: 'app/modules/admin/views/admin-home.html'
    }).state('admin.postNew', {
        url: '/posts/new',
        controller: 'PostCreationController',
        templateUrl: 'app/modules/admin/views/admin-new-post.html'
    }).state('admin.postUpdate', {
        url: '/posts/:id/edit',
        controller: 'PostUpdateController',
        templateUrl: 'app/modules/admin/views/admin-update-post.html'
    }).state('admin.postViewAll', {
        url: '',
        controller: 'PostListController',
        templateUrl: 'app/modules/admin/views/admin-all-posts.html'
    });
}]);
