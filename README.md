# Frontend Project Generator ([中文版](./README_zh.md))

* [User Guide](./docs/user_guide.md) - How to develop apps bootstrapped with generator-modation

## Technology Stack

* React
* Redux
* Webpack
* React-router
* Immutable
* Antd

## Usage

* yarn global add yo --prefix /usr/local
* yarn add global generator-modation
* mkdir myapp && cd myapp
* yo modation
* yarn install
* yarn start
* view `localhost:8000` on your browser
* Enjoy!

## Code Check

* Eslint check JS with [airbnb JS style](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
* Stylelint check CSS
* Git commit message check

## Sub Generator

### Add New Component

* Go to the folder where you will to add component, like: `cd src/components`
* And run command as follow:
```
yo modation:component <componet-name>
```

### Add New Container

* Go to `src/containers` folder, run command as follow:
```
yo modation:container <container-name>
```

### Add Testcase of React Component

* Go to the folder where you will to add testcase, and run command as follow:
```
yo modation:unittest <component-name>
```

## [Todo List](./docs/todo.md)
