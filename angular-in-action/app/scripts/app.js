'use strict';

/**
 * @ngdoc overview
 * @name angularInActionApp
 * @description
 * # angularInActionApp
 *
 * Main module of the application.
 */
angular
  .module('angularInActionApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
