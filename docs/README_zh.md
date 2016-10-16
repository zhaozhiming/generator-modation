# 前端项目生成器

## 技术栈

* React
* Redux
* Webpack
* React-router
* Immutable
* Antd

## 用法

* yarn global add yo
* yarn global add generator-modation
* mkdir myapp && cd myapp
* yo modation
* yarn install
* yarn start
* view `localhost:8000` on your browser
* Enjoy!

## 代码检查

* Eslint 检查基于[airbnb JS 规范](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
* Stylelint 检查 CSS
* Git 提交信息检查

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

## [待完成功能](./todo.md)

## [目录结构](./project_structure.md)
