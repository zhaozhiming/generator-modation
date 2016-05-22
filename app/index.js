const generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);
  },

  writing: function() {
    this.fs.copy(
      this.templatePath('docs/README.md'),
      this.destinationPath('docs/README.md')
    );
    this.fs.copy(
      this.templatePath('configs/webpack.config.js'),
      this.destinationPath('configs/webpack.config.js')
    );
    this.fs.copy(
      this.templatePath('src/**/*.*'),
      this.destinationPath('src')
    );
  }
});
