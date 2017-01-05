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
.controller('MaincontentController', maincontentController);

maincontentController.$inject = [];

function maincontentController(){
	console.log("maincontentController");
};