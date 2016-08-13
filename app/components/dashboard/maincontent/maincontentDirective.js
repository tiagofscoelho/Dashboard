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
.directive('mainContent', function(){
	return {
 		templateUrl: 'components/dashboard/maincontent/maincontentView.html'
	}
});