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
.factory('authenticationService', authentication);

authentication.$inject = [];

function authentication(){
	return {
		teste : function(){
			console.log("teste");
		}
	}
}
