var app = angular.module('app', []);

app.controller('mainCtrl', function($scope) {
    console.log('ctrl scope', $scope)
    $scope.posts = [
        {
            name: "This is post about cats"
        },
        {
            name: "This post about dogs"
        }
    ];
    $scope.getPosts = function() {
        return $scope.posts;
    };
});

app.directive('post', function() {
    return {
        scope: false,
        template: "<div ng-repeat='post in getPosts()'>{{post.name}}</div>",
        link: function(scope, element, attrs) {
            console.log('scope', scope);
        }
    };
});