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

asideController.$inject = ["$scope"];

function asideController($scope){
	console.log("asideController");

	$scope.aside = {
		theme : "aside-dark",
		list : 
		[
			{
				name : "Level 1",
				badge : {
					value : 5,
					type : "Warning"
				},
				icon : "fa-tachometer",
				is_opened : false,
				sub : {
					1 : {
						name : "Sub Level 1",
						badge : {
							value : 4,
							type : "Success"
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
					value : 0,
					type : "Warning"
				},
				icon : "fa-tachometer"
			},
			{
				name : "Level 3",
				badge : {
					value : 0,
					type : "Warning"
				},
				icon : "fa-tachometer",
				is_opened : true,
				sub : {
					1 : {
						name : "Sub Level 1",
						badge : {
							value : 4,
							type : "Success"
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
				name : "Level 4",
				label : {
					value : "New",
					type : "default"
				},
				icon : "fa-tachometer"
			},
			{
				name : "Level 5",
				badge : {
					value : 1,
					type : "Warning"
				},
				icon : "fa-tachometer"
			}
		]
	}
};