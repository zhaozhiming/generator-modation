# 前端项目generator

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
