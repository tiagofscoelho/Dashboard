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

asideController.$inject = ["$scope", "$state"];

function asideController($scope, $state){
	console.log("asideController");

	$scope.aside = {
		theme : "aside-dark",
		list : 
		[
			{
				type : "dividir",
				value : "Main navigation"
			},
			{
				type : "navigation",
				name : "Dashboard",
				icon : "fa-tachometer",
				state : "home",
				active : true
			},
			{
				type : "navigation",
				name : "Chat",
				icon : "fa-comments-o",
				state : "home.chat"
			},
			{
				type : "navigation",
				name : "Mailbox",
				icon : "fa-envelope",
				state : "home.mailbox"
			},
			{
				type : "navigation",
				name : "Calendar",
				icon : "fa-calendar",
				state : "home.calendar"
			},
			{
				type : "navigation",
				name : "To do",
				icon : "fa-check",
				state : "home.todo"
			},
			{
				type : "navigation",
				name : "Notes",
				icon : "fa-sticky-note",
				state : "home.notes"
			}
		/*
			{
				type : "dividir",
				value : "UI Elements"
			},
			{
				type : "navigation",
				name : "Tables",
				badge : {
					value : 2,
					type : "info"
				},
				icon : "fa-tachometer",
				is_opened : false,
				sub : {
					1 : {
						name : "Sub Level 1",
						badge : {
							value : 4,
							type : "danger"
						},
						icon : "fa-tachometer"
					},
					2 : {
						name : "Sub Level 2",
						badge : {
							value : 5,
							type : "info"
						},
						icon : "fa-tachometer"
					}
				}
			},
			{
				name : "Level 2",
				badge : {
					value : 1,
					type : "warning"
				},
				icon : "fa-tachometer"
			},
			{
				name : "Level 3",
				icon : "fa-tachometer",
				is_opened : true,
				sub : {
					1 : {
						name : "Sub Level 1",
						badge : {
							value : 4,
							type : "success"
						},
						icon : "fa-tachometer"
					},
					2 : {
						name : "Sub Level 2",
						badge : {
							value : 5,
							type : "danger"
						},
						icon : "fa-tachometer"
					},
					3 : {
						name : "Sub Level 3",
						badge : {
							value : 0,
							type : "info"
						},
						icon : "fa-envira"
					}
				}
			},
			{
				name : "Level 4",
				label : {
					value : "New",
					type : "info"
				},
				icon : "fa-tachometer"
			},
			{
				name : "Level 5",
				badge : {
					value : 1,
					type : "success"
				},
				icon : "fa-tachometer"
			}*/
		]
	}


	$scope.elementClicked = function(index, hasSub){

		var elem = $scope.aside.list[index];

		if(hasSub !== undefined) elem.is_opened ^= true;
		else 
		{
			for(var i = 0 ; i < $scope.aside.list.length; i++){
				$scope.aside.list[i].active = false;
			}
			elem.active = true;
			$state.go(elem.state);
		}
	}
};