# 前端项目生成器

## 技术栈

* React
* Redux
* Webpack
* React-router
* Immutable
* Antd

## 用法

* npm install -g yo
* npm install -g generator-modation
* mkdir myapp && cd myadd
* yo modation
* npm install
* npm start
* view `localhost:8000` on your browser
* Enjoy!

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

### 添加 React 组件测试用例

* 进到要创建测试用例的目录，执行以下命令：
```
yo modation:unittest <component-name>
```

## [待完成功能](./docs/todo.md)

## [目录结构](./docs/project_structure.md)
