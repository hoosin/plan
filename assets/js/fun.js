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
		{title:'第三期'}
	] 

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

}

function editor() {

	if (localStorage.cheat==undefined) {
		$('#Jtext p').show();	
	} else if(localStorage.cheat!=undefined){
		$('#Jtext').html(localStorage.cheat);
	};

	var txt=$('#Jtext').html();

	$('#Jeditor').click(function() {
		if ($('#Jtext').html()=='<p style="display: block;">快来贴上你的备忘吧...</p>') {
			$('#Jinput textarea').text('');
		} else{
			$('#Jinput textarea').text(txt);
		};
		$('#Jinput').show();
		go();
	})

} 

function go() {
	$('#Jcancel').click(function() {
		$('#Jinput').hide();
	})
	$('#Jset').click(function() {
		if ($('#Jinput textarea').val()=='') {
			alert('写点什么吧，万一忘记了呢？')
		} else{
			$('#Jtext').html($('#Jinput textarea').val());
			localStorage.cheat=$('#Jinput textarea').val();
			$('#Jinput').hide();
		};
	})
}

function browserRedirect() {
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
		document.getElementById('Jcheat').style.display='none'
	} else {
		editor()
	}
}

browserRedirect();


// js main
window.onload = function() {
	var dl = document.getElementsByClassName('demoLink'),
		control = document.getElementsByClassName('control');

	for (var i = 0; i < control.length; i++) {
		control[i].innerHTML == '' ? control[i].parentNode.style.display = 'none' : control[i].parentNode.style.display = 'block';
	};

	for (var i = 0; i < dl.length; i++) {
		dl[i].getAttribute('href') == '' ? dl[i].parentNode.style.display = 'none' : dl[i].parentNode.style.display = 'inline';

	};

	// 计算项目时间差

	var controlTime = document.getElementsByClassName('Jtime');

	for (var i = 0; i < controlTime.length; i++) {
		var endTime = controlTime[i].getAttribute('etime'),
			startTime = controlTime[i].getAttribute('stime');

		endTime = endTime.replace(/-/g, '/');
		startTime = startTime.replace(/-/g, '/');
		endTime = new Date(endTime);
		startTime = new Date(startTime);

		var times = endTime.getTime() - startTime.getTime();
		var days = parseInt(times / (1000 * 60 * 60 * 24))+1;
		controlTime[i].innerHTML = '(' + '<span class="strong">'+days+'</span>' + ')';
	};

}