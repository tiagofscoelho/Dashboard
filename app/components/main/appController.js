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
.controller('AppController', applicationController);

applicationController.$inject = ["$state", "$rootScope"];

function applicationController($state, $rootScope){

	$rootScope.dashboard = {
		theme : "dark-blue",
		lang  : "EN"
	};
	
	$state.go('dashboard');
};