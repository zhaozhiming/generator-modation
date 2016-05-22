const generators = require('yeoman-generator');
const mkdirp = require('mkdirp');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);
  },

  writing: function() {
    mkdirp.sync('docs');
    this.fs.copy(
      this.templatePath('configs/webpack.config.js'),
      this.destinationPath('configs/webpack.config.js')
    );
    mkdirp.sync('src/server');
    this.fs.copy(
      this.templatePath('src/constants/actionTypes.js'),
      this.destinationPath('src/constants/actionTypes.js')
    );
  }
});
