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
         type: 'list',
         name: 'uiLib',
         message: 'Which react UI library would you like:',
         choices: [
           {
             name: 'No, I use the library for myself',
             value: 'none',
           },
           {
             name: 'Ant-design',
             value: 'antd',
           },
         ],
      },
    ];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: {
    projectTree: function() {
      // copy hidden files
      this.fs.copy(
        this.templatePath('**/.*'),
        this.destinationRoot(),
        { dot: true }
      );
      // copy unhidden files
      this.fs.copy(
        this.templatePath('**/*.*'),
        this.destinationRoot()
      );
      // copy babelrc with uilib
      this.fs.copyTpl(
        this.templatePath('.babelrc'),
        this.destinationPath('.babelrc'),
        {
          packageOpts: {
            uiLib: this.props.uiLib,
          },
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
          packageOpts: {
            uiLib: this.props.uiLib,
          },
        }
      );
    },

    serverNode: function() {
      this.fs.copyTpl(
        this.templatePath('src/server/index.js'),
        this.destinationPath('src/server/index.js'),
        { projectName: this.props.projectName }
      );
    },
  },
});
