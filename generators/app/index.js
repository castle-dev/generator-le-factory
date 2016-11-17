'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var asciiArt = require('le-ascii-art');
var path = require('path');
var q = require('q');
var formatter = require('change-case');
var wiring = require('html-wiring');

var answers;

var CastleFactoryGenerator = yeoman.generators.Base.extend({
  prompting: function() {
    var done = this.async();
    var dir = process.cwd().split(path.sep).pop();
    this.prompt([{
      type: 'input',
      name: 'factoryName',
      message: 'What is the name of your new factory?',
      default: 'le-factory-name'
    }], function(responses) {
      answers = responses;
      done();
    }.bind(this));
  },
  writing: function() {
    var writer = this;

    function copyTemplate(from, to) {
      writer.fs.copyTpl(
        writer.templatePath(from),
        writer.destinationPath(to),
        answers
      );
    };

    function addToIndex(pathToAdd) {
      var hook = '<!-- YOEMAN HOOK -->';
      var path = 'client/index.html';
      var file = wiring.readFileAsString(path);
      if (!file || file.indexOf(hook) === -1) {
        console.log('Unable to find hook "' + hook + '"in ' + path);
        return;
      }
      var insert = '<script type="text/javascript" src="' + pathToAdd + '"></script>';

      if (file.indexOf(insert) === -1) {
        wiring.writeFileFromString(file.replace(hook, hook + '\n\t' + insert), path);
      }
    };

    function addToAppModules(module) {
      var hook = '/*--YEOMAN-HOOK--*/';
      var path = 'client/src/app/app.js';
      var file = wiring.readFileAsString(path);
      if (!file || file.indexOf(hook) === -1) {
        console.log('Unable to find hook "' + hook + '"in ' + path);
        return;
      }
      var insert = "'" + module + "',";
      if (file.indexOf(insert) === -1) {
        wiring.writeFileFromString(file.replace(hook, hook + '\n\t' + insert), path);
      }
    };

    answers.paramCaseFactoryName = formatter.param(answers.factoryName);
    answers.pascalCaseFactoryName = formatter.pascal(answers.factoryName);
    answers.camelCaseFactoryName = formatter.camel(answers.factoryName);
    copyTemplate('_factory.js', 'client/src/common/factories/' + answers.paramCaseFactoryName + '.js');
    addToIndex('tmp/common/factories/' + answers.paramCaseFactoryName + '.js');
    addToAppModules('common.factories.' + answers.camelCaseFactoryName);
  },
});

asciiArt.printLogo();

module.exports = CastleFactoryGenerator;
