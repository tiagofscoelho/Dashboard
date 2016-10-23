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

	var themes = ["purple", "dark-blue", "light-blue", "dark-green", "light-green", "orange", "grey"];
	var asideThemes = ["aside-dark", "aside-light"];

	/**
		Function to change theme randomly just for debug 
	**/
	$scope.changeTheme = function(themePosition){
		$rootScope.dashboard.theme = themes[themePosition - 1];
	}

	$scope.changeAsideTheme = function(themePosition){
		$rootScope.dashboard.aside_theme = asideThemes[themePosition - 1];
	}

	$scope.toggleQuickview = function(){
		$rootScope.dashboard.quickview_opened ^= true;
	}

};