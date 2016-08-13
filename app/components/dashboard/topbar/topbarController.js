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
	var themes = ["dark-blue", "light-blue", "purple", "dark-green", "light-green", "orange", "grey"];

	/**
		Function to change theme randomly just for debug 
	**/
	$scope.changeTheme = function(){
		var theme = themes[Math.floor(Math.random()*themes.length)];
		$rootScope.dashboard.theme = theme;
	}
};