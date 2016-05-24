const generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);
  },

  prompting: function () {
    var prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'Your project name',
        default: this.appname,
      },
      {
        type: 'input',
        name: 'projectDesc',
        message: 'Your project description',
      },
    ];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function() {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      {
        projectName: this.props.projectName,
        projectDesc: this.props.projectDesc,
      }
    );
    this.fs.copy(
      this.templatePath('_babelrc'),
      this.destinationPath('.babelrc')
    );
    this.fs.copy(
      this.templatePath('_eslintrc'),
      this.destinationPath('.eslintrc')
    );
    this.fs.copy(
      this.templatePath('devServer.js'),
      this.destinationPath('devServer.js')
    );
    this.fs.copy(
      this.templatePath('docs/README.md'),
      this.destinationPath('docs/README.md')
    );
    this.fs.copy(
      this.templatePath('webpack/**/*.*'),
      this.destinationPath('webpack')
    );
    this.fs.copy(
      this.templatePath('src/**/*.*'),
      this.destinationPath('src')
    );
    this.fs.copyTpl(
      this.templatePath('src/server/index.js'),
      this.destinationPath('src/server/index.js'),
      {
        projectName: this.props.projectName,
      }
    );
  },
});
