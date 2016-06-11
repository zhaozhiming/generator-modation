'use strict';

const generators = require('yeoman-generator');


class Component extends generators.Base {
  constructor(args, opts) {
    super(args, opts);

    this.argument('componentName', {
      type: String,
      required: true,
      description: 'component name'
    });
  }

  prompting() {
    const prompts = [
      {
        type: 'checkbox',
        name: 'features',
        message: 'What more would you like?',
        choices: [
          {
            name: 'CSS Modules',
            value: 'cssModules',
            checked: true,
          },
        ],
      },
    ];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  writing() {
    const componentName = this.componentName;

    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath(`${componentName}/${componentName}.js`),
      {
        componentName,
        enableCssModules: this.props.features.includes('cssModules'),
      }
    );

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath(`${componentName}/package.json`),
      { componentName }
    );

    this.fs.copy(
      this.templatePath('style.css'),
      this.destinationPath(`${componentName}/style.css`)
    );
  }
}

module.exports = Component;
