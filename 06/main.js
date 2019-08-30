var app = angular.module('app', []);

app.controller('mainCtrl', function () {
    this.myLesson = "mainLesson";

    this.addLesson = function () {
        console.log('addLesson');
    };
});

app.controller('firstCtrl', function () {
    this.myLesson = "firstLesson";
});

app.controller('secondCtrl', function () {
    this.myLesson = "secondLesson";
});