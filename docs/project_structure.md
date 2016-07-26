## Project Structure

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
│   │   └── Foo
│   │       ├── Foo.js
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
│   │   └── Foo
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
