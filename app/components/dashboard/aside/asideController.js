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
.controller('AsideController', asideController);

asideController.$inject = ["$scope", "$state", "asideElements"];

function asideController($scope, $state, asideElements){

	$scope.aside = asideElements.data;
	
	$scope.elementClicked = function(index, hasSub){

		var elem = $scope.aside.list[index];

		if(hasSub !== undefined)
		{
			elem.is_opened ^= true;
		}
		else 
		{
			for(var i = 0 ; i < $scope.aside.list.length; i++){
				$scope.aside.list[i].active = false;
			}
			elem.active = true;
			$state.go(elem.state);
		}
	}

	$scope.getArrowToElement = function(elemOpened, asideOpened){
		if(asideOpened)
		{
			if(elemOpened)
			{
				return "fa-angle-up";
			} 
			else 
			{
				return "fa-angle-down";
			} 
		} 
		else 
		{
			if(elemOpened)
			{
				return "fa-long-arrow-up";
			} 
			else 
			{
				return "fa-long-arrow-up";
			} 
		}
	}
};