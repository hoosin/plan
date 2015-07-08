// Javascript document

angular.module('homePage.controller', [])

.controller('HomePageCtrl', function($http,$scope) {

	var authors = ['张三','李四','王五'],
		status = ['none','done','dont','doing','nopass','affirm'];

	$scope.setMsg = {
		project:'报表平台项目',
		pm: '鲍佩琪 杜建荣', //需求
		f2e:'白舜', //前端
		designer:'李德武', //设计
		designerPlan:'http://192.168.50.78/2014.07/jcz/plan.html', //设计进度
		coordinator:'黄丽玲', //协调
		charsetMsg:'UTF-8', //项目编码
		picUrl:'2014/test/images/', //图片素材
		cssUrl:'svn/data/2014/test/', //css路径
		psdUrl:'svn/test/psd/', //psd路径
		footMsg:'在前端开发时切勿忘记 test监测标识、统计代码', //底部相关备忘数据
	};

	$scope.items1=[
		{author:authors[0],stime:'2014-09-30',etime:'2014-10-01',pageName:'首页',demo:'http://www.qq.com/',online:'',statu:status[1]},
		{author:authors[0],stime:'2014-03-28',etime:'2014-10-09',pageName:'首页',demo:'http://www.qq.com/',online:'',statu:status[2]},
		{author:authors[0],stime:'2014-05-28',etime:'2014-10-09',pageName:'首页',demo:'http://www.qq.com/',online:'',statu:status[3]},
		{author:authors[0],stime:'2014-08-28',etime:'2014-10-09',pageName:'首页',demo:'http://www.qq.com/',online:'',statu:status[4]},
		{author:authors[0],stime:'2014-07-28',etime:'2014-10-09',pageName:'首页',demo:'http://www.qq.com/',online:'',statu:status[5]},
		{author:authors[0],stime:'2014-06-28',etime:'2014-10-09',pageName:'首页',demo:'http://www.qq.com/',online:'',statu:status[0]}];
	$scope.items2=[
		{author:authors[0],stime:'2014-10-03',etime:'2014-10-08',pageName:'首页',demo:'http://www.qq.com/',online:'',statu:status[1]},
		{author:authors[0],stime:'2014-09-28',etime:'2014-10-09',pageName:'首页',demo:'http://www.qq.com/',online:'',statu:status[1]}];
	$scope.items3=[
		{author:authors[0],stime:'2014-09-30',etime:'2014-10-01',pageName:'首页',demo:'http://www.qq.com/',online:'',statu:status[1]},
		{author:authors[0],stime:'2014-10-28',etime:'2014-10-31',pageName:'首页',demo:'http://www.qq.com/',online:'',statu:status[1]}];	

});