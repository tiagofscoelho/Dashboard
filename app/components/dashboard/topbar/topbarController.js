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
	console.log("topbarController");

	$scope.toggleAside = function(){
		$rootScope.dashboard.aside_opened ^= true;
	}
};