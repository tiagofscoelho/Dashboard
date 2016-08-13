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
.directive('aside', function(){
	return {
 		templateUrl: 'components/dashboard/aside/asideView.html'
	}
});