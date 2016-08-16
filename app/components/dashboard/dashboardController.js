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
.controller('DashboardController', dashboardController);

dashboardController.$inject = ["$rootScope"];

function dashboardController($rootScope){

	$rootScope.dashboard = {
		theme : "dark-blue",
		lang  : "EN",
		aside_opened : true
	};
};