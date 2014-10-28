
![](http://www.easyicon.net/api/resize_png_new.php?id=1097043&size=24) plan  
====

静态的项目排期模板，基于Angular.js 

![main](https://raw.githubusercontent.com/hoosin/plan/master/assets/main.jpg)

- **LIVE DEMO:** [http://hoosin.github.io/plan](http://hoosin.github.io/plan)

### 模板介绍

我在团队项目的时候，通常会建立一个静态的 ```html``` 制定项目排期计划，以便于更好的协作。考虑到项目的庞大，传统的 ```html``` 方式往往我们会让我们填的晕头转向，刚好 ```Angular.js``` 有套模板解决方案 ，图个一劳永逸，写此模板。

plan是基于 ```Angular.js``` 的一套静态模板，他无需安装，轻松上手，你只需配置 ``` app.js ``` 即可，无需理会繁琐的 ```HTML``` 代码。

### 代码仓库

```
.
├── index.html    --- Demo index
├── README.md     --- README file
├── license.txt   --- license
└── assets
     ├── lib      --- angular lib mini
     ├── css      --- css file
     └── js       --- js file
```

### 配置说明

配置 ```assets/js/app.js``` 文件

#### workMsg($scope)

- ```project```      项目名称
- ```pm```           需求
- ```f2e```          前端
- ```designer```     设计
- ```designerPlan``` 视觉进度
- ```coordinator```  项目协调
- ```charsetMsg```   项目编码
- ```picUrl```       图片素材
- ```cssUrl```       css路径
- ```psdUrl```       psd路径
- ```footMsg```      底部相关备忘信息

##### control 控制

```.control``` 字段为空，不显示当前项

#### project($scope)

##### 存储开发者姓名、项目进度状态

```js
var authors = ['张三','李四','王五'], //开发者姓名
	status = ['none','done','dont','doing','nopass','affirm']; //项目进度状态

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
```

##### 项目二级标题

当二级项目标题为空，不显示项目排期列表

```js
$scope.itemTit=[
	{title:'第一期'},
	{title:'第二期'},
	{title:''}
] 
```

##### item信息 

```js
{
	author: authors[2],//开发者
	stime: '2014-09-30',//项目开始时间
	etime: '2014-10-30',//项目结束时间
	pageName: '腾讯首页',//页面名称
	demo: '', //线上地址 (为空时不显示)
	online: '', //线上地址 (为空时不显示)
	statu: status[0] // 进度说明 (详见状态标识说明)
},
```

### 单元测试  

```
$ git clone https://github.com/hoosin/plan.git
$ cd plan
```


##### 更多angular信息请移步：[https://github.com/zensh/AngularjsTutorial_cn](https://github.com/zensh/AngularjsTutorial_cn)

### 开源许可

Copyright (c) 2014 hoosin, contributors.
Released under the ,  [licenses](https://raw.githubusercontent.com/hoosin/plan/master/LICENSE)
