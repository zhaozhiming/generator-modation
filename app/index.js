const generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);

    // Next, add your custom code
  },
  initializing: function () {
    this.log('method 1 just run');
  },

  prompting: function () {
    var prompts = [{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname // Default to current folder name
    }, {
      type    : 'confirm',
      name    : 'cool',
      message : 'Would you like to enable the Cool feature?'
    }];
    return this.prompt(prompts).then(function (answers) {
      this.log('app name', answers.name);
      this.log('cool feature', answers.cool);
    }.bind(this));
  },

  writing: function() {
    this.fs.copy(
      this.templatePath('docs/README.md'),
      this.destinationPath('docs/README.md')
    );
  }
});
