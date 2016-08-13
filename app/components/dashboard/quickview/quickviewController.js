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
.controller('QuickviewController', quickviewController);

quickviewController.$inject = [];

function quickviewController(){
	console.log("quickviewController");
};