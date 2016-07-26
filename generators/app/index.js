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
      {
        type: 'confirm',
        name: 'serverSide',
        message: 'Would you like to use the server side?',
      },
    ];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: {
    projectTree: function() {
      const templateFiles = [this.templatePath() + '/**'];
      // files filter
      if (this.props.serverSide) {
        templateFiles.push('!**/index.html');
      } else {
        templateFiles.push('!**/server/**');
        templateFiles.push('!**/server.js');
        templateFiles.push('!**/devServer.js');
      }

      // copy all files
      this.fs.copy(
        templateFiles,
        this.destinationRoot(),
        { globOptions: { dot: true } }
      );

      if (!this.props.serverSide) {
        this.fs.copyTpl(
          this.templatePath('index.html'),
          this.destinationPath('index.html'),
          { projectName: this.props.projectName }
        );
      }

      this.fs.copyTpl(
        this.templatePath('src/containers/Foo/actions.js'),
        this.destinationPath('src/containers/Foo/actions.js'),
        {
          serverSide: this.props.serverSide,
        }
      );

      this.fs.copyTpl(
        this.templatePath('src/components/Name/Name.js'),
        this.destinationPath('src/components/Name/Name.js'),
        {
          serverSide: this.props.serverSide,
        }
      );
    },

    packageJSON: function() {
      this.fs.copyTpl(
        this.templatePath('package.json'),
        this.destinationPath('package.json'),
        {
          projectName: this.props.projectName,
          projectDesc: this.props.projectDesc,
          serverSide: this.props.serverSide,
        }
      );
    },

    serverNode: function() {
      if (this.props.serverSide) {
        this.fs.copyTpl(
          this.templatePath('src/server/handlers/main.js'),
          this.destinationPath('src/server/handlers/main.js'),
          { projectName: this.props.projectName }
        );
      }
    },
  },
});
