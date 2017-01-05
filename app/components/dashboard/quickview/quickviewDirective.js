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
.directive('quickView', function(){
	return {
 		templateUrl: 'components/dashboard/quickview/quickviewView.html'
	}
});