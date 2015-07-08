var includeModuleArr=['ngRoute','homePage.service', 'homePage.controller',];

angular.module('myApp',includeModuleArr)

.config(['$routeProvider',function ($routeProvider) {

	$routeProvider

	.when('/homePage', {
		templateUrl: '../../plan/templet/plan.html',
		controller: 'HomePageCtrl'
	})
	
	.otherwise({ 
		redirectTo: '/homePage' 
	})

}])