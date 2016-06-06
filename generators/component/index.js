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
        name: 'files',
        message: 'What more would you like?',
        choices: [
          {
            name: 'package.json',
            value: 'packageJson',
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
    const componentName = this.componentName;
    this.fs.copyTpl(
      this.templatePath('index.jsx'),
      this.destinationPath(`${componentName}/${componentName}.jsx`),
      { componentName }
    );

    if (this.props.files.includes('packageJson')) {
      this.fs.copyTpl(
        this.templatePath('package.json'),
        this.destinationPath(`${componentName}/package.json`),
        { componentName }
      );
    }

    if (this.props.files.includes('readme')) {
      this.fs.copy(
        this.templatePath('README.md'),
        this.destinationPath(`${componentName}/README.md`)
      );
    }
  }
}

module.exports = Component;
