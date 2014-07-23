function workMsg($scope) {
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
}

function project($scope) {
	var authors = ['张三','李四','王五'],
		status = ['none','done','dont','doing','nopass','affirm'];

		/*
		 * 状态标识说明
		 * status[0] == 初始化，无状态
		 * status[1] == 已完成
		 * status[2] == 未开始
		 * status[3] == 进行中
		 * status[4] == 未确认
		 * status[5] == 已确认
		 * 
		 */
		
	$scope.itemTit=[
		{title:'第一期'},
		{title:'第二期'},
		{title:''}
	] 

	$scope.items1=[
		{author:authors[0],time:'(7.17-21(3))',pageName:'首页',demo:'http://www.qq.com/',online:'',statu:status[1]},
		{author:authors[1],time:'(7.18-21(2))',pageName:'页面',demo:'',online:'',statu:status[0]},
		{author:authors[2],time:'(7.18-21(2))',pageName:'页面',demo:'',online:'',statu:status[2]},
		{author:authors[0],time:'(7.22-22(1)) ',pageName:'页面',demo:'',online:'',statu:status[1]},
		{author:authors[0],time:'(7.23-23(1))',pageName:'页面',demo:'',online:'',statu:status[0]}
	];
	$scope.items2=[
		{author:authors[2],time:'(7.24-24(1))',pageName:'页面',demo:'',online:'',statu:status[3]},
		{author:authors[2],time:'(7.25-29(5))',pageName:'页面',demo:'',online:'',statu:status[0]},
		{author:authors[2],time:'(7.28-29(2))',pageName:'首页',demo:'http://www.qq.com/',online:'http://www.qq.com/',statu:status[5]},
		{author:authors[2],time:'(7.28-29(2))',pageName:'页面',demo:'',online:'',statu:status[0]},
		{author:authors[2],time:'(7.30-31(2))',pageName:'页面',demo:'',online:'',statu:status[1]},
		{author:authors[2],time:'(7.30-31(2))',pageName:'页面',demo:'',online:'',statu:status[0]},
		{author:authors[2],time:'(8.1-1(1))',pageName:'页面',demo:'',online:'',statu:status[0]}
	];
	$scope.items3=[
		{author:authors[2],time:'(8.1-1(1))',pageName:'页面',demo:'',online:'',statu:status[0]},
		{author:authors[2],time:'(8.5-6(1))',pageName:'页面',demo:'',online:'',statu:status[0]},
		{author:authors[2],time:'(8.5-5(1))',pageName:'页面',demo:'',online:'',statu:status[3]},
		{author:authors[2],time:'(8.5-5(1))',pageName:'页面',demo:'',online:'',statu:status[0]},
		{author:authors[2],time:'(8.5-5(1))',pageName:'页面',demo:'',online:'',statu:status[0]},
		{author:authors[2],time:'(8.5-5(1))',pageName:'页面',demo:'',online:'',statu:status[2]},
		{author:authors[2],time:'(8.5-5(1))',pageName:'页面',demo:'',online:'',statu:status[0]},
		{author:authors[2],time:'(8.5-5(1))',pageName:'页面',demo:'',online:'',statu:status[0]},
		{author:authors[2],time:'(8.5-5(1))',pageName:'页面',demo:'',online:'',statu:status[0]},
		{author:authors[2],time:'(8.5-5(1))',pageName:'页面',demo:'',online:'',statu:status[0]},
		{author:authors[2],time:'(8.5-5(1))',pageName:'页面',demo:'',online:'',statu:status[0]}
	];	
}

// 当链接为空，隐藏按钮
window.onload = function() {
	var dl = document.getElementsByClassName('demoLink'),
		control = document.getElementsByClassName('control');

	for (var i = 0; i < control.length; i++) {
		control[i].innerHTML == '' ? control[i].parentNode.style.display = 'none' : control[i].parentNode.style.display = 'block';
	};

	for (var i = 0; i < dl.length; i++) {
		dl[i].getAttribute('href') == '' ? dl[i].parentNode.style.display = 'none' : dl[i].parentNode.style.display = 'inline';

	};

}