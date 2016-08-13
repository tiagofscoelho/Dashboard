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

dashboardController.$inject = [];

function dashboardController(){
	console.log("dashboardController");
};