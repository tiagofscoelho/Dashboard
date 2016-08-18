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
  			template : "<h1>Chat</h1>"
	  })
	  .state('home.mailbox', {
	  	url : '/mailbox',
  			template : "<h1>adasd</h1>"
  	  })
	  .state('home.calendar', {
	  	url : '/calendar',
  			template : "<h1>Calendar</h1>"
	  })
	  .state('home.todo', {
	  	url : '/todo',
  			template : "<h1>Todo</h1>"
	  })
	  .state('home.notes', {
	  	url : '/notes',
  			template : "<h1>Notes</h1>"
	  });

}]);