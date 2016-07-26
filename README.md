# Frontend Project Generator ([中文版](./docs/README.zh.md))

## Technology Stack

* React
* Redux
* Webpack
* React-router
* Immutable
* Antd

## Usage

* npm install -g yo
* npm install -g generator-modation
* mkdir myapp && cd myadd
* yo modation
* npm install
* npm start
* view `localhost:8000` on your browser
* Enjoy!

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

## [Project Structure](./docs/project_structure.md)
