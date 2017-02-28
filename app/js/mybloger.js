angular.module('myBloger',['ui.router','myBloger.posts','myBloger.posts.controllers','myBloger.posts.directives','myBloger.admin','myBloger.admin.controllers']);
angular.module('myBloger').run(['$state', function($state) {
    $state.go('allPosts');

}]);
