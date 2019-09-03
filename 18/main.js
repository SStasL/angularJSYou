var app = angular.module('app', []);

app.controller('mainCtrl', function($http, $scope) {
    $http.get('http://localhost:3001/books')
        .then(function(result) {
            console.log('success', result);
            $scope.books = result.data;
        }
        ,function(result) {
            console.log('error');
        });
    $scope.addBook = function(book) {
        console.log(book);
        $http.post('http://localhost:3001/books', book)
            .then(function(result) {
                console.log('book successefully saved');
                $scope.books.push(book);
                $scope.book = null;
            }
            ,function(result) {
                console.log('error in book post');
            });
    }
});