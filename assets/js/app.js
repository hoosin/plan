function workMsg($scope) {
	$scope.setMsg = {
		pm: '鲍佩琪 杜建荣', //需求
		f2e:'白舜', //前端
		designer:'李德武', //设计
		designerPlan:'http://192.168.50.78/2014.07/jcz/plan.html', //设计进度
		coordinator:'黄丽玲', //协调
		charsetMsg:'UTF-8', //项目编码
		picUrl:'2014/test/images/', //图片素材
		cssUrl:'svn/data/2014/test/', //css路径
		psdUrl:'svn/test/psd/' //psd路径
	};
}

function project($scope) {
	var authors=['张三','李四','王五'];
	$scope.items1=[
		{author:authors[0],time:'(7.17-21(3))',pageName:'首页',demo:'http://www.qq.com/',pass:'未确认',online:''},
		{author:authors[1],time:'(7.18-21(2))',pageName:'页面',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(7.18-21(2))',pageName:'页面',demo:'',pass:'未确认',online:''},
		{author:authors[0],time:'(7.22-22(1)) ',pageName:'页面',demo:'',pass:'未确认',online:''},
		{author:authors[0],time:'(7.23-23(1))',pageName:'页面',demo:'',pass:'未确认',online:''}
	];
	$scope.items2=[
		{author:authors[2],time:'(7.24-24(1))',pageName:'页面',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(7.25-29(5))',pageName:'页面',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(7.28-29(2))',pageName:'首页',demo:'http://www.qq.com/',pass:'未确认',online:'http://www.qq.com/'},
		{author:authors[2],time:'(7.28-29(2))',pageName:'页面',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(7.30-31(2))',pageName:'页面',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(7.30-31(2))',pageName:'页面',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(8.1-1(1))',pageName:'页面',demo:'',pass:'未确认',online:''}
	];
	$scope.items3=[
		{author:authors[2],time:'(8.1-1(1))',pageName:'页面',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(8.5-6(1))',pageName:'页面',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(8.5-5(1))',pageName:'页面',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(8.5-5(1))',pageName:'页面',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(8.5-5(1))',pageName:'页面',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(8.5-5(1))',pageName:'页面',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(8.5-5(1))',pageName:'页面',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(8.5-5(1))',pageName:'页面',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(8.5-5(1))',pageName:'页面',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(8.5-5(1))',pageName:'页面',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(8.5-5(1))',pageName:'页面',demo:'',pass:'未确认',online:''}
	];
	
}

// 当链接为空，隐藏按钮
window.onload = function() {
	var dl = document.getElementsByClassName('demoLink');
	for (var i = 0; i < dl.length; i++) {
		if (dl[i].getAttribute('href') == '') {
			dl[i].parentNode.style.display = 'none';
		};
	};
}