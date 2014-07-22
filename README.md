plan
====

![main](https://raw.githubusercontent.com/hoosin/plan/master/assets/main.jpg)

- **基于Angular.js的项目进度模板**
- **LIVE DEMO:** [http://hoosin.github.io/plan](http://hoosin.github.io/plan)


### 模板介绍

我在团队项目的时候，通常会建立一个静态的 ```html``` 文件制定项目计划，以便于更好的协作。考虑到项目的庞大，传统的 ```html``` 方式往往我们会让我们填的晕头转向，之前刚好接触过 ```Angular.js``` ，图个一劳永逸，写此模板。

plan是基于 ```Angular.js``` 静态模板，他无需安装，轻松上手，你只需配置 ``` app.js ``` 即可，省去修改庞大的 ```HTML``` 代码

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

###workMsg($scope)

- ```project```      项目名称
- ```pm```           需求
- ```f2e```          前端
- ```designer```     设计
- ```designerPlan``` 设计进度
- ```coordinator```  协调
- ```charsetMsg```   项目编码
- ```picUrl```       图片素材
- ```cssUrl```       css路径
- ```psdUrl```       psd路径
- ```footMsg```      底部相关备忘信息

### project($scope)

#### 存储开发者姓名、项目进度状态

```js
var authors = ['张三','李四','王五'], //开发者姓名
	status = ['none','status-icon done','status-icon dont','status-icon doing']; //项目进度状态

	/*
	 * status array 
	 * 状态标识说明
	 * status[0] == 初始化，无状态
	 * status[1] == 已完成
	 * status[2] == 未开始
	 * status[3] == 进行中
	 * 
	 */ 
```

#### item项目信息 
```js
	{
		author: authors[2],//开发者
		time: '(8.1-1(1))',//需求排期
		pageName: '页面',//页面名称
		demo: '', //线上地址
		pass: '未确认', //前端确认状态
		online: '', //线上地址
		statu: status[0] // 进度说明
	},
```
#### 更多angular信息请移步：[https://github.com/zensh/AngularjsTutorial_cn](https://github.com/zensh/AngularjsTutorial_cn)

### 开源许可

Copyright (c) 2014 hoosin, contributors.
Released under the ,  [licenses](https://raw.githubusercontent.com/hoosin/plan/master/LICENSE)
