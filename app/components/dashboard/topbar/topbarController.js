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

topbarController.$inject = ["$scope", "$rootScope"];

function topbarController($scope, $rootScope){
	$scope.toggleAside = function(){
		$rootScope.dashboard.aside_opened ^= true;
	}
};