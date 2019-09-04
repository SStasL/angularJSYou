var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        // template: "<h1>This is my homepage</h1>"
        templateUrl: 'home.html'
    })
    .when('/post', {
        template: "<h1>Posts for my site</h1>"
    })
});