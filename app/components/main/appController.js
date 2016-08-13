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

applicationController.$inject = ["$state"];

function applicationController($state){
	$state.go('dashboard');
};