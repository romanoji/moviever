'use strict';

angular.module('moviever', ['ngAnimate', 'ngCookies', 'ngSanitize', 'restangular', 'ngRoute', 'mm.foundation'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/yeoman', {
        templateUrl: 'partials/yeoman.html',
        controller: 'YeomanCtrl'
      })
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
