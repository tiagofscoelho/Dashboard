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

quickviewController.$inject = ["$scope", "$rootScope"];

function quickviewController($scope, $rootScope){

	console.log("quickviewController");

	var themes = ["dark-blue", "light-blue", "purple", "dark-green", "light-green", "orange", "grey"];

	/**
		Function to change theme randomly just for debug 
	**/
	$scope.changeTheme = function(){
		var theme = themes[Math.floor(Math.random()*themes.length)];
		$rootScope.dashboard.theme = theme;
	}

	$scope.toggleQuickview = function(){
		$rootScope.dashboard.quickview_opened ^= true;
	}

};