# 前端项目 generator

## 技术栈
* React
* Redux
* Webpack
* Immutable
* Antd

## 用法

* 先 git clone 本工程，然后输入命令`npm link`（后续可以考虑发布到 npm 上），将工程加入到 npm 仓库中
* 安装 yeoman: `npm install -g yo`
* 在要新建工程的目录中通过命令`yo modation`来创建工程
* 在新工程目录执行命令`git init .`工程添加git版本控制
* 在新工程目录执行命令`npm install`安装依赖包
* 在新工程目录执行命令`npm start`启动服务，访问地址：`localhost:8000`

## 子生成器

### 添加新组件

* 进到你要添加组件的目录，比如：`cd src/components`
* 然后执行以下命令：
```
yo modation:component <componet-name>
```

### 添加新 container

* 进到`src/containers`目录，执行以下命令：
```
yo modation:container <container-name>
```

## Todo List

- [x] 将启动服务改成使用 webpack devserver 来启动
- [x] 将后端服务改成用户选择配置
- [x] sub-generator container 需要放置到 src/containers 下
- [x] sub-generator component 修改 jsx 文件为 js
- [ ] 生成 compoent 测试文件的 generetor
- [ ] 加上 fetch 数据的示例
- [x] 将子生成器的package.json变为index.js文件

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
