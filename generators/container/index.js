'use strict';

const generators = require('yeoman-generator');


class Container extends generators.Base {
  constructor(args, opts) {
    super(args, opts);

    this.argument('containerName', {
      type: String,
      required: true,
      description: 'coontainer name'
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
          {
            name: 'README.md',
            value: 'readme',
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
    const containerName = this.containerName;

    this.fs.copyTpl(
      this.templatePath('index.jsx'),
      this.destinationPath(`${containerName}/${this.containerName}.jsx`),
      {
        containerName,
        enableCssModules: this.props.features.includes('cssModules'),
      }
    );

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath(`${containerName}/package.json`),
      { containerName }
    );

    this.fs.copyTpl(
      this.templatePath('route.js'),
      this.destinationPath(`${containerName}/route.js`),
      { containerName }
    );

    this.fs.copy(
      this.templatePath('actions.js'),
      this.destinationPath(`${containerName}/actions.js`)
    );

    this.fs.copy(
      this.templatePath('reducer.js'),
      this.destinationPath(`${containerName}/reducer.js`)
    );

    this.fs.copy(
      this.templatePath('style.css'),
      this.destinationPath(`${containerName}/style.css`)
    );

    if (this.props.features.includes('readme')) {
      this.fs.copy(
        this.templatePath('README.md'),
        this.destinationPath(`${containerName}/README.md`)
      );
    }

  }
}

module.exports = Container;
