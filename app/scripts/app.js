'use strict';

/**
 * @ngdoc overview
 * @name dashboardApp
 * @description
 * # dashboardApp
 *
 * Main module of the application.
 */
angular
  .module('dashboardApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngTouch'
  ])
  .config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
  function($stateProvider, $locationProvider, $urlRouterProvider) {


 $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/404");

// Now set up the states
    $stateProvider
      .state('root', {
        url: "/",
        templateUrl: "views/index.html"
      })
    }
  ]);