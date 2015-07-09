// Javascript document

angular.module('homePage.controller', [])

.controller('HomePageCtrl', function($scope,homePageDb) {

	var authors = ['张三','李四','王五'];
	
	homePageDb.getMainInfo().then(function(res){
		$scope.setMsg=res.data.data.topMsg;
		$scope.itemTit=res.data.data.itemTit;
		$scope.items1=res.data.data.plan[0].plan1;
		$scope.items2=res.data.data.plan[0].plan2;
		$scope.items3=res.data.data.plan[0].plan3;
	});

});