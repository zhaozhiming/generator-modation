# 前端项目generator

## 技术栈
* React
* Redux
* Webpack
* Antd
* Immutable

## 用法

* 先git clone本工程，然后输入命令`npm link`（后续可以考虑发布到npm上），将工程加入到npm仓库中
* 安装yeoman: `npm install -g yeoman`
* 在要新建工程的目录中通过命令`yo modation`来创建工程
* 在新工程目录执行命令`npm install`安装依赖包
* 在新工程目录执行命令`npm start`启动服务，访问地址：`localhost:8000`

## 目录结构

```
├── .babelrc
├── .eslintrc
├── package.json
├── devServer.js
├── docs
│   └── README.md
├── src
│   ├── app.js
│   ├── components
│   │   └── Name
│   │       ├── Name.js
│   │       ├── package.json
│   │       └── style.css
│   ├── constants
│   │   └── actionTypes.js
│   ├── containers
│   │   └── Foo
│   │       ├── Foo.js
│   │       ├── actions.js
│   │       ├── components
│   │       │   └── Message
│   │       │       ├── Message.js
│   │       │       ├── package.json
│   │       │       └── style.css
│   │       ├── index.js
│   │       ├── reducer.js
│   │       └── style.css
│   ├── reducers.js
│   ├── routes.js
│   ├── server
│   │   ├── README.md
│   │   └── index.js
│   ├── store.js
│   ├── styles
│   │   └── App.css
│   └── utils
│       └── README.md
└── webpack
    ├── base.js
    ├── client.js
    └── server.js
```

## Sub Generator

### 添加新组件

> yo modation:component <componet-name>

### 添加新container

> yo modation:container <container-name>

## Todo List

- [] 将 antd 组件从示例代码中取消，改用纯html标签
- [] 将 antd 改成在创建工程的时候选择配置
- [] 将启动服务改成使用webpack devserver来启动
- [] 将后端服务去掉
- [] sub-generator component 需要放置到src/components下
- [] sub-generator container 需要放置到src/containers下



