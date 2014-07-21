function workMsg($scope) {
	$scope.setMsg = {
		pm: '鲍佩琪 杜建荣', //需求
		f2e:'汤智海 胡欣欣', //前端
		designer:'李德武', //设计
		designerPlan:'http://192.168.50.78/2014.07/jcz/plan.html', //设计进度
		coordinator:'黄丽玲', //协调
		charsetMsg:'UTF-8', //项目编码
		picUrl:'2014/jrzcz/images/', //图片素材
		cssUrl:'svn/data/pconline/2014/jrzcz/', //css路径
		psdUrl:'svn/电脑网/聚超值/psd/' //psd路径
	};
}

function project($scope) {
	var authors=['汤智海','黄树澄','胡欣欣'];
	$scope.items1=[
		{author:authors[0],time:'(7.17-21(3))',pageName:'首页',demo:'../index.html',pass:'未确认',online:''},
		{author:authors[1],time:'(7.18-21(2))',pageName:'爆料',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(7.18-21(2))',pageName:'经验和晒单终端页',demo:'',pass:'未确认',online:''},
		{author:authors[0],time:'(7.22-22(1)) ',pageName:'海淘首页',demo:'',pass:'未确认',online:''},
		{author:authors[0],time:'(7.23-23(1))',pageName:'晒物首页',demo:'',pass:'未确认',online:''}
	];
	$scope.items2=[
		{author:authors[2],time:'(7.24-24(1))',pageName:'发现列表首页',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(7.25-29(5))',pageName:'首页终端页',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(7.28-29(2))',pageName:'搜索结果页',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(7.28-29(2))',pageName:'分裂爆料列表页',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(7.30-31(2))',pageName:'发现终端页',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(7.30-31(2))',pageName:'海淘终端页',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(8.1-1(1))',pageName:'晒单（经验）终端页',demo:'',pass:'未确认',online:''}
	];
	$scope.items3=[
		{author:authors[2],time:'(8.1-1(1))',pageName:'体验中心页',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(8.5-6(1))',pageName:'体验中心终端页',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(8.5-5(1))',pageName:'体验中心、海淘代购弹窗',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(8.5-5(1))',pageName:'首页-收藏',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(8.5-5(1))',pageName:'首页-取消收藏',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(8.5-5(1))',pageName:'求购信息',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(8.5-5(1))',pageName:'求购成功',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(8.5-5(1))',pageName:'已经求购',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(8.5-5(1))',pageName:'完善个人信息',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(8.5-5(1))',pageName:'免费试用流程',demo:'',pass:'未确认',online:''},
		{author:authors[2],time:'(8.5-5(1))',pageName:'提交成功',demo:'',pass:'未确认',online:''}
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