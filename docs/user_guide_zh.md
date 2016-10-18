当你使用generator创建项目之后，就可以开始开发你的Web应用，下面是本项目框架的一个使用指南，可以指导你如何使用框架开发新功能。  
  
## 目录
  
* [目录结构](#目录结构)
* [操作命令](#操作命令)
    * [npm start](#npm-start)
    * [npm run start:dist](#npm-run-startdist)
    * [npm test](#npm-test)
    * [npm run check](#npm-run-check)
    * [npm run dist](#npm-run-dist)
* [静态代码检查](#静态代码检查)
    * [JS代码检查](#JS代码检查)
    * [CSS代码检查](#CSS代码检查)
* [安装依赖](#安装依赖)
* [导入组件](#导入组件)
* [添加样式](#添加样式)
* [CSS预处理](#CSS预处理)
* [添加图片和字体](#添加图片和字体)
* [使用And Design](#使用and-design)
* [编写action](#编写action)
* [编写reducer](#编写reducer)
* [发送请求](#发送请求)
* [集成服务端](#集成服务端)
* [编写测试](#编写测试)
    * [编写reducer测试](#编写reducer测试)
    * [编写组件测试](#编写组件测试)
* [项目部署](#项目部署)
    * [前端项目部署](#前端项目部署)
    * [后端项目部署](#后端项目部署)


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
│   │       ├── index.js
│   │       └── style.css
│   ├── constants
│   │   └── actionTypes.js
│   ├── containers
│   │   └── Main
│   │       ├── Main.js
│   │       ├── actions.js
│   │       ├── components
│   │       │   └── Message
│   │       │       ├── Message.js
│   │       │       ├── index.js
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
├── test
│   ├── containers
│   │   └── Main
│   │       ├── components
│   │       │   └── Message
│   │       │       └── Message.test.js
│   │       └── reducer.test.js
│   ├── css-null-compiler.js
│   ├── dom.js
│   └── macha.opts
├── validate-commit-msg.js
└── webpack
    ├── base.js
    ├── client.js
    └── server.js
```

## 操作命令
在项目中，你可以运行如下命令：  

### `npm start`

在开发环境运行项目，启动成功后，在浏览器打开http://localhost:8000可以访问。  

当你修改项目中的文件并保存后，应用进程会重新加载，如果有错误会在终端显示。

### `npm run start:dist`

在生产环境运行打包后的项目，整体性能比开发环境更快。

### `npm test`

运行项目中的测试，你可以查看[编写测试](#编写测试)章节了解如何编写测试用例。  

### `npm run check`

运行代码检查，发现你的代码是否有错误，检查内容包括JS和CSS文件，你可以查看[静态代码检查](#静态代码检查)章节了解更多内容。

### `npm run dist`

运行打包程序，将项目打包为静态资源文件。

## 静态代码检查

项目中集成了一些JS和CSS编码规范，这些规范是业界推崇比较好的规范，这样可以统一开发团队的编码规范，避免杂乱无章的代码。  

如果你的代码不符合这些规范，在终端会提示你哪些文件有哪些错误，如下图所示：  

![](images/eslint_error.png)

有两种方式可以帮助你查看到代码规范错误：

* 你可以运行`npm run check`来检查你的代码是否包含错误
* 项目通过`npm start`启动后，如果代码有错误，会在终端显示错误信息

### JS代码检查

项目中使用的JS检查工具是[eslint](http://eslint.org/)，JS的编码规范引用了[airbnb公司的JS代码规范](https://github.com/airbnb/javascript)，这些规则是基于ES6的，如果你不了解ES6，请先了解一下[ES6的语法](http://es6.ruanyifeng.com/)，这样可以避免一些常见的错误。  

如果对提示的错误信息不了解，可以通过Google搜索`eslint 规则名称`来查询eslint规则的详细信息，以上面的图为例，错误信息的每一行后面都有规则名称，所以搜索的关键字为`eslint no-useless-escape`，在对应的页面中通常都会教你如何修改这个错误。

### CSS代码检查

项目中使用[stylelint](https://github.com/stylelint/stylelint)来做css代码的规范检查，stylelint的规则文件是项目根目录下的`.stylelintrc`文件，你可以修改里面的规则来让其更适合你的开发团队。  

同样的，如果你对提示的错误信息不了解，也可以通过Google搜索`stylelint 规则名`来了解规则的详细信息，和eslint一样，每一行错误信息的最后会显示规则名称：

![](images/stylelint_error.png)

* [安装依赖](#安装依赖)

项目中已经包含了React，ReactDOM和Redux等基础依赖库，如果你想安装其他的依赖库，请通过yarn（这是最新的JS包管理工具，不了解的可以在[yarn官网](https://yarnpkg.com)查看更多详细信息）进行安装，命令如下：  

```
yarn add <library-name> [--dev]
```

如果你想安装在devDependencies下就加上`--dev`参数。

* [导入组件](#导入组件)

项目使用[Babel](https://babeljs.io/)编译ES6语法，当然你还是可以使用`require()`和`module.exports`来导入和导出你的组件，但我们还是推荐你使用`import`和`export`。

举个例子：

### `Button.js`

```js
import React, { Component } from 'react';

class Button extends Component {
  render() {
    // ...
  }
}

export default Button; 
```

### `DangerButton.js`


```js
import React, { Component } from 'react';
import Button from './Button'; // 导入另外Button.js文件里面的组件

class DangerButton extends Component {
  render() {
    return <Button color="red" />;
  }
}

export default DangerButton;
```

请注意[`expoart`和`export default`的区别](http://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281)，这是一个容易搞错的地方。  

当模块里面只需要导出一个东西的时候我们建议你使用默认导出比如`export default Button`，这样在导入的时候就可以直接这样导入`import Button from './Button`。  

像这样`export Button`的名字导出在工具类中比较有用，这样可以导出多个方法。一个模块最多只能有一个默认的导出，但可以有多个名字导出。  

下面的资料可以让你对ES6模块有更多的了解：  

* [When to use the curly braces?](http://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281)
* [Exploring ES6: Modules](http://exploringjs.com/es6/ch_modules.html)
* [Understanding ES6: Modules](https://leanpub.com/understandinges6/read#leanpub-auto-encapsulating-code-with-modules)

## 添加样式

工程使用[Webpack](https://webpack.github.io/)来处理所有资源文件，包括JS，CSS和图片等。Webpack提供了一种自定义的方式来扩展JS的`import`功能。为了表示一个JS文件依赖一个CSS文件，你需要**在JS文件中`import` CSS文件**。

### Button.css

```css
.button {
  padding: 20px;
}
```

### Button.js

```js
import React, { Component } from 'react';
import style from './Button.css'; // 告诉Webpack Button.js 使用了这些样式

class Button extends Component {
  render() {
    // 你可以将CSS文件当成一个对象来使用，.button这个样式看成是对象的一个属性
    return <div className={style.button} />;
  }
}
```

这一部分跟React没有任何关系，但大部分人使用这种方式来开发React应用，因为这样会感觉比较方便，你可以在[这篇文章](https://medium.com/seek-ui-engineering/block-element-modifying-your-javascript-components-d7f99fcab52b)中了解这种方式的好处。

在开发环境，如果你的CSS文件修改了，应用进程会重新加载。在生产环境，所有的CSS文件最后会被打包成一个CSS文件。  

## CSS预处理

项目会自动压缩你的CSS文件，并通过[Autoprefixer](https://github.com/postcss/autoprefixer)自动为你的CSS属性添加各种浏览器前缀，所以你在写CSS只需要写原始的CSS属性就可以了。

举个例子：

```css
.App {
  display: flex;
  flex-direction: row;
  align-items: center;
}
```

会变成：

```css
.App {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
```

项目目前不支持预处理器文件比如Less等，只支持CSS文件。

## 添加图片和字体

通过Webpack，使用图片和字体的方法跟使用CSS文件类似。

你可以在JS文件中导入一个图片文件，这样会告诉Webpack在集成文件中要包含这个图片。和导入CSS文件不一样的地方是，导入一个图片或字体文件是返回一个字符串，这个字符串是这个文件的地址。

举个例子：

```js
import React from 'react';
import logo from './logo.png'; // 告诉Webpack这个JS文件使用这个图片

console.log(logo); // /logo.84287d09.png

function Header() {
  // 在这里使用这个图片的路径
  return <img src={logo} alt="Logo" />;
}

export default function Header;
```

这样可以确保Webpack在打包的时候将图片等引入的静态文件打包到构建文件，并提供一个正确的引用路径。

在CSS文件中可以这样引入图片：

```css
.Logo {
  background-image: url(./logo.png);
}
```

Webpack会找到CSS中所有相关的引用，并将它们在打包文件中体现，如果你的图片路径有误或者路径上没有图片，你会看到一个编译错误。在生产环境Webpack会将图片名替换成为一个随机的名字，如果文件修改了，会变成另外一个随机名字，所以你不用担心缓存引起的问题。

## 使用And Design

项目中默认使用[Ant Design](https://ant.design/)（antd）组件框架，它是使用React编写的，可以让你很方便地使用一些通用的组件，比如Button, Modal等，省去了你编写一些通用组件的工作量。

举个例子：

```js
import React from 'react';
import { Button } from 'antd'; // 导入antd中的Button组件

class YourButton extends Component {
  render() {
    return <Button type="primary">OK</Button>;
  }
}

export default YourButton;
```

这只是一个简单的示例，在antd中有更多复杂的组件，如果要使用请仔细阅读该组件的说明文档，确定每个属性或者方式是使用正确的，如果在使用的过程中发现antd组件有什么问题，可以在其[issues区](https://github.com/ant-design/ant-design/issues)提问题，一般都能很快得到答复。

项目默认使用的antd版本是v2.0.1，查阅相关文档时请注意antd的版本是否正确。

