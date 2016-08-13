'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dashboardApp
 */
angular
.module('dashboardApp')
.config(['$stateProvider', '$locationProvider', '$urlRouterProvider',

function($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/404");

  $stateProvider
	  .state('root', {
	    url: '/',
	    controller: 'AppController'
	  })
	  .state('dashboard', {
	  	url : '/dashboard',
	  	controller : 'DashboardController',
	  	templateUrl : 'components/dashboard/dashboardView.html'
	  });

}]);