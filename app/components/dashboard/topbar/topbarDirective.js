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
.directive('topBar', function(){
	return {
 		templateUrl: 'components/dashboard/topbar/topbarView.html'
	}
});