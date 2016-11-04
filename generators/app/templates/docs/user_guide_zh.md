当你使用generator创建项目之后，就可以开始开发你的Web应用了，下面是本项目框架的一个使用指南，可以指导你如何使用框架开发新功能。  
  
## 目录
  
* [项目结构](#项目结构)
* [操作命令](#操作命令)
    * [npm start](#npm-start)
    * [npm run start:dist](#npm-run-startdist)
    * [npm test](#npm-test)
    * [npm run check](#npm-run-check)
    * [npm run dist](#npm-run-dist)
* [静态代码检查](#静态代码检查)
    * [JS代码检查](#JS代码检查)
    * [CSS代码检查](#CSS代码检查)
* [提交信息校验](#提交信息校验)
* [开发一个小功能](#开发一个小功能)
    * [编写组件](#编写组件)
    * [编写action](#编写action)
    * [编写reducer](#编写reducer)
* [编写路由](#编写路由)
* [安装依赖](#安装依赖)
* [导入组件](#导入组件)
* [添加样式](#添加样式)
* [CSS预处理](#CSS预处理)
* [添加图片和字体](#添加图片和字体)
* [使用Ant Design](#使用ant-design)
* [发送请求](#发送请求)
* [集成服务端](#集成服务端)
* [编写测试](#编写测试)


## 项目结构

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

* docs: 放置项目文档
* src: 源文件目录
    * components: 放置公共组件
    * constants: 放置常量文件
    * containers: 这是放置容器型组件的地方，容器型组件包含了自己的action,reducer和router，里面还可以有自己的子组件
* test: 测试文件目录，放置测试用例
* webpack: Webpack配置文件的目录，客户端和服务端的配置是分不同文件配置的

## 操作命令

在项目中，你可以运行如下命令：

### `npm start`

在开发环境运行项目，启动成功后，在浏览器打开`http://localhost:8000`可以访问。

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

## 提交信息校验

项目中集成git提交信息的校验，我们希望能从代码的提交记录中知道修改的主要内容，比如是修改哪个模块的代码，是新功能的添加，还是修复缺陷，或者是添加测试等。

提交信息的格式为: `<type>(<scope>): <subject>`，其中type和subject是必须的，scope是可选的。

type主要有以下几种类型：

* feat：新功能（feature）
* fix：修补bug
* docs：文档（documentation）
* style： 格式（不影响代码运行的变动）
* refactor：重构（即不是新增功能，也不是修改bug的代码变动）
* test：增加测试
* chore：构建过程或辅助工具的变动

scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

subject是 commit 目的的简短描述，不超过50个字符。

更详细的参考资料可以看[这里](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)。

## 开发一个小功能

假设我们需要开发小功能——添加待办事项，下面分别以开发React组件，Redux action方法和reducer方法为例，介绍一下如何开发这个功能。

## 编写组件

项目使用[React](https://facebook.github.io/react/)来做前端页面渲染，React是最近比较流行的一个页面渲染框架，通过React可以很方便进行页面组件化开发，并最大化的复用页面组件，避免重复代码，提高代码可维护性。

这是一个添加待办事项的的React组件：

```js
import React, { Component, PropTypes } from 'react';

class TodoInput extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const text = event.target.value;
    this.setState({ value: text});
    this.props.actions.addTodo(text);
  }

  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
}

export default TodoInput;
```

每个组件使用ES6的class来封装，继承react的`Component`对象，`render`方法是每个组件必须存在的方法，渲染的页面写在这里面。

在组件的开头部分是props对象的校验，`actions: PropTypes.object.isRequired`是指actions这个属性是对象（`object`）类型，而且是必须的（`isRequired`），如果在引用这个组件时没有传递actions属性，编译将会报错，如果传给actions的值不是object类型的，编译会给一个警告。

`constructor`是类的构造器，里面定义了组件的state这个对象各个属性的初始值，并将`handleChange`方法绑定到了这个组件对象里面来。**请注意，并不是所有方法都需要`bind(this)`，如果方法里面用到了`this`这个关键字才需要绑定。**

`handleChange`方法可以改变组件的内部数据，通过调用`setState`方法来改变，传入的参数是一个包含了state属性的对象。请注意，不能使用`this.state.value = 'foo'`这种方式给state属性赋值，一般是通过`setState`方法来改变state数据。

最后是`render`方法，一般是返回页面元素，可以通过JS语法根据state或props对象的值来生成动态的页面。请注意，`render`方法返回的对象必须只有一个根元素，比如是`<div></div>`，多于一个都会编译报错，比如这种是错误的：`<div></div><div></div>`。

更多React的详细信息可以参考以下资料：

* [React官网](https://facebook.github.io/react/)
* [React Pattern](http://reactpatterns.com/)

## 编写action

项目使用了[Redux](https://github.com/reactjs/redux)来做组件的数据状态管理，action是应用发送数据到Redux仓库的一个信息载体，它们是仓库的原始信息。

前面的`TodoInput`组件调用了`actions.addTodo()`方法，传入了输入框中的值，下面是这个action示例：

### actionTypes.js

```js
export const ADD_TODO = 'ADD_TODO';
```

### action.js

```js
import { ADD_TODO } from '../actionTypes';

function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}
```

首先我们定义一个常量来表示action的类型，一般这些常量会有单独一个文件（比如`actionTypes.js`）来存放。

然后定义一个方法返回一个纯JS对象，这个对象必须包含`type`属性，其它属性都是可选的。type属性的类型是字符串，这个type会和reducers里面的type对应起来，从而建立两者关联。

通常建议action返回的对象只包含一些必要的数据，并且能小尽量的小，不要包含太多属性，也不要在某个属性里面赋值一个很大的对象。

## 编写reducer

如果action表示某些事情已经发生了，那么reducer就表示如何响应这些事情，如何根据action返回的数据更新Redux仓库的内容。

在Redux中，应用的所有数据都存放在一个单独的对象里面，在写Redux代码前最好把这个概念深印在你的脑海里。

reducer是一个纯函数，接收前状态和action为参数，返回一个新的状态。

```js
(previousState, action) => newState
```

在reducer方法里面建议不要做以下事情：

* 修改方法参数
* 执行性能消耗大的操作，比如调用后端API或者转换路由
* 调用一些不纯的函数，比如`Date.now()`或`Math.random()`

下面是一个reducer的例子：

```js
import { ADD_TODO } from '../actionTypes';
import immutable from 'immutable';

const initialState = immutable.fromJS({
  todos: [],
});

function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.get('todos', (todos) => todos.push({
        text: action.text,
        completed: false,
      }));
    default:
      return state;
  }
}
```

首先我们引用了[`immutable`](http://facebook.github.io/immutable-js/docs)这个第三方工具库，它的主要作用是不改变原来的对象，而是在每次操作后返回一个新的对象。为什么要使用`immutable`呢？这是因为Redux仓库里面的数据都是不可变的，如果需要修改里面的数据，需要返回一个全新的对象来覆盖原来的对象，所以`immutable`非常合适在Redux项目中使用。更多`immutable`的用法可以参考其官网的文档。

然后我们构造了一个状态对象的初始值，这个是reducer方法第一次被调用时会使用的初始值，在reducer方法参数里面被这样用到`state = initialState`，如果传入的state参数为空，则使用`initialState`来为参数`state`赋值。

在reducer主体方法里面，我们根据action的类型来判断该走哪种处理逻辑，比如类型如果是`ADD_TODO`的话就在原来的`todos`集合里面添加一个新的todo对象，如果所有action类型都不匹配，就原封不动地返回原来的state对象。

更多Redux的详细信息可以参考以下资料：

* [Redux 文档](http://redux.js.org/)
* [Redux 视频](https://egghead.io/series/getting-started-with-redux)

## 编写路由

项目使用了[`react-router`](https://github.com/ReactTraining/react-router)来控制前端页面路由。

现在项目中的示例代码只配置一个根路由`/`，这个路由指向了`Main`组件，代码示例如下：

### routes.js(before)

```js
import Main from 'containers/Main';

export function createRoutes() {
  return {
    path: '/',
    component: Main,
  };
}
```

如果要配置更多的路由，首先需要修改`Main`组件，将在其render方法中添加`this.props.children`，表示组件会展示其子路由组件的内容。然后在`routes.js`里面添加子路由，代码示例如下：

### Main.js

```js
class Main extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

```

### routes.js(after)

```js
export function createRoutes() {
  return {
    path: '/',
    component: Main,
    childRoutes: [
        { path: 'about', component: About }, // 访问about可以看到About组件
        { path: 'inbox', component: Inbox }, // 访问inbox可以看到Inbox组件
    ],
  };
}
```

更多react-router的详细信息可以参考以下资料：

* [react-router](https://github.com/ReactTraining/react-router)
* [react-router中文文档](https://react-guide.github.io/react-router-cn)

## 安装依赖

项目中已经包含了React，ReactDOM和Redux等基础依赖库，如果你想安装其他的依赖库，请通过yarn（这是最新的JS包管理工具，不了解的可以在[yarn官网](https://yarnpkg.com)查看更多详细信息）进行安装，命令如下：  

```
yarn add <library-name> [--dev]
```

如果你想安装在devDependencies下就加上`--dev`参数。

## 导入组件

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

请注意[`export`和`export default`的区别](http://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281)，这是一个容易搞错的地方。  

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

## 使用Ant Design

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

这只是一个简单的示例，在antd中有更多复杂的组件，如果要使用请仔细阅读该组件的说明文档，确定每个属性或者方法是使用正确的，如果在使用的过程中发现antd组件有什么问题，可以在其[issues区](https://github.com/ant-design/ant-design/issues)提问题，一般都能很快得到答复。

项目默认使用的antd版本是v2.0.1，查阅相关文档时请注意antd的版本是否正确。

## 发送请求

项目中使用`fetch`方法来发送http请求从服务器获取数据，一般我们建议在action方法里面来做发送请求的操作。

在项目中可以使用ES7的一些实验性语法`async\await`，使用它们可以避免写回调方法，使得我们的代码更加直观易懂。

举个例子：

```js
export async function randomName(num) {
  const response = await fetch('/api/name/random', {
    method: 'post',
    body: JSON.stringify({
      num,
    }),
  });
  const result = await response.json();
  return {
    type: at.CHANGE_NAME,
    name: result.name ,
  };
}
```

我们通过`fetch`请求后台服务器的api获取到json数据，这里分成2个部分，首先获取response，然后再从response中获取json数据，最后将结果封装在action对象中返回。

更多参考资料：

* [这个API很迷人](http://www.w3ctech.com/topic/854)
* [async 函数的含义和用法](http://www.ruanyifeng.com/blog/2015/05/async.html)

## 集成服务端

使用generator创建项目可以选择是否需要服务端，如果选择需要，项目框架中会添加服务端的代码。

项目服务端使用[`hapi.js`](http://hapijs.com/)作为后端服务器的框架，使用该框架可以很方便地编写后端API。

举个例子：

### index.js

```js
import name from './handlers/name';

const server = new Hapi.Server();
server.route([name]);
```

### name.js

```js
export default {
  method: ['POST'],
  path: '/api/name/random',

  config: {
    handler(request, reply) {
      const { num } = JSON.parse(request.payload);
      const randomNames = [];
      for (let i = 0; i < num; i++) {
        randomNames.push(getRandomName());
      }
      return reply({
        name: randomNames.join(' '),
      });
    },
  },
};
```

首先在hapi的服务`server`中通过`route`方法添加`name`这个路由，这个路由其实是一个JS对象，里面有以下基本属性：

* method: 定义请求的方法，比如`GET`，`PUST`等
* path: 定义路由的url路径
* config: 具体处理逻辑，通过`request`参数可以获取请求的参数，然后通过`reply`参数可以返回response结果

## 编写测试

项目中使用[`Mocha`](https://mochajs.org/)来做单元测试，不管是前端代码还是后端的，都可以使用该测试框架写测试用例。

在项目根目录下执行`yarn test`命令会运行所有测试用例，在git提交时也会执行该操作，如果测试用例有失败的，则不能提交成功。

项目中的`test`目录是放置测试文件的地方，我们建议每个测试文件需和功能文件一一对应，包括文件的路径。比如有个功能文件，文件路径是`src/components/Header/Header.js`，那么测试文件的路径就应该是`test/components/Header/Header.test.js`，每个测试文件需要加上`.test`后缀，这样测试框架才能找到并执行它们。

测试React组件我们需要使用[`Enzyme`](https://github.com/airbnb/enzyme)这个工具包，它是一个方便你测试React组件的工具，它提供了一系列方便的API，让你可以在测试代码中渲染组件，并通过选择器找到你要验证的页面元素进行结果校验，还可以方便地获取组件中的`props`和`state`数据来测试结果。

以测试React组件为例：

### Message.test.js

```js
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Message from 'containers/Main/components/Message';

describe('Message component', () => {
  it('should render correctly', () => {
    const wrap = shallow(<Message {...props} />);
    expect(wrap.find('span').length).to.be.equal(1);
    expect(wrap.find('span').text()).to.be.equal('Message: foo');
  });
});
```

通过调用`enzyem`的`shallow`方法可以浅渲染出React组件，并通过`find`方法找到其中的html元素，验证其个数是否正确，渲染出的内容是否正确等。

通过`yo modation:unittest <component-name>`命令可以让你快速创建一个测试文件，首先要进入到你要创建测试文件的文件夹，然后执行该命令。

