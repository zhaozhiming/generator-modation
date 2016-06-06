const generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);
  },

  prompting: function() {
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
    this.fs.copy(
      this.templatePath('**/.*'),
      this.destinationRoot(),
      { dot: true }
    );
    this.fs.copy(
      this.templatePath('**/*.*'),
      this.destinationRoot(),
      { dot: true }
    );
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      {
        projectName: this.props.projectName,
        projectDesc: this.props.projectDesc,
      }
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
