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
.constant('asideElements' , {
	data : {
		list : 
		[
			{
				header : true,
				value : "Main navigation"
			},
			{
				name : "Dashboard",
				icon : "fa-tachometer",
				state : "home",
				active : true,
				label : {
					value : "New",
					type : "success"
				}
			},
			{
				name : "Chat",
				icon : "fa-comments-o",
				state : "home.chat"
			},
			{
				name : "Mailbox",
				icon : "fa-envelope",
				state : "home.mailbox",
				badge : {
					value : 45,
					type : "info"
				}
			},
			{
				name : "Calendar",
				icon : "fa-calendar",
				state : "home.calendar"
			},

			{
				name : "To do",
				icon : "fa-check",
				state : "home.todo"
			},
			{
				name : "Notes",
				icon : "fa-sticky-note",
				state : "home.notes"
			},
			{
				header : true,
				value : "Sub levels"
			},
			{
				name : "Level 3",
				icon : "fa-tachometer",
				badge : {
					value : 3,
					type : "info"
				},
				is_opened : false,
				sub : {
					1 : {
						name : "Base level",
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
			}
		]
	}
});