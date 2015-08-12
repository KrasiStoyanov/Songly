'use strict';

var app = angular.module('Songly', ['ngRoute', 'ngResource', 'ngCookies']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/partials/home.html',
                controller: 'HomeController'
            })
            .otherwise({ redirectTo: '/home' });
    }])
    .value('toastr', toastr)
    .run(function ($rootScope) {
        $rootScope.user = {
            username: 'Emily Truman',
            profileImageSrc: '../img/userPhoto.jpg'
        };

        $rootScope.notifications = [
            {
                icon: 'glyphicon glyphicon-envelope',
                title: 'Use awesome animate.css',
                when: '13 minutes'
            },
            {
                src: '../img/userPhoto.jpg',
                title: 'Test this cool new dashboard',
                when: '13 minutes'
            },
            {
                title: 'Play with the UI & UX Design kit',
                when: '13 minutes'
            }
        ];
    });