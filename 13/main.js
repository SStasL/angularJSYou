var app = angular.module('app', []);

app.run(function($templateCache){
    $templateCache.put('bookmarks.html',"<div ng-repeat='bookmark in bookmarks'>{{bookmark.name}}</div>")
});

app.directive('fooBar', function($templateCache){
    let bookmarks = [
        {
            id: 1,
            name: 'Spring'
        },
        {
            id: 2,
            name: 'EmberJS'
        },
        {
            id: 3,
            name: 'AngularJS'
        }
    ]
    return {
        restrict: 'E',
        templateUrl: "bookmarks.html",
        link: function(scope, element, attrs) {
            scope.bookmarks = bookmarks;
            console.log($templateCache.info());
        }
    }
});