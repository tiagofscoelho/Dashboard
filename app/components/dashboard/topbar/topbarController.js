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
.controller('TopbarController', topbarController);

topbarController.$inject = [];

function topbarController(){
	console.log("topbarController");
};