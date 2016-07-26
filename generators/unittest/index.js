const generators = require('yeoman-generator');

class Unittest extends generators.Base {
  constructor(args, opts) {
    super(args, opts);

    this.argument('component', {
      type: String,
      required: true,
      description: 'component name'
    });
  }

  prompting() {
    return this.prompt([]).then((props) => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('example.test.js'),
      this.destinationPath(`${this.component}/${this.component}.test.js`),
      {
        component: this.component,
      }
    );
  }
}

module.exports = Unittest;
