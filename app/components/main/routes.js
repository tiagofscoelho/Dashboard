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
	  .state('home', {
	  	url : '/home',
  			controller : 'DashboardController',
  			templateUrl : 'components/dashboard/dashboardView.html'
	  })
	  .state('home.chat', {
	  	url : '/chat',
  			controller : 'DashboardController',
  			template : "<h1>Chat</h1>"
	  })
	  .state('home.mailbox', {
	  	url : '/mailbox',
  			controller : 'DashboardController',
  			template : "<h1>Calendar</h1>"
	  })
	  .state('home.calendar', {
	  	url : '/calendar',
  			controller : 'DashboardController',
  			template : "<h1>Calendar</h1>"
	  })
	  .state('home.todo', {
	  	url : '/todo',
  			controller : 'DashboardController',
  			template : "<h1>Todo</h1>"
	  })
	  .state('home.notes', {
	  	url : '/notes',
  			controller : 'DashboardController',
  			template : "<h1>Notes</h1>"
	  });

}]);