'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    fingerprint: {
      generateAssetMap: true,
      prepend: 'https://static.intercomassets.com/ember/',
      extensions: ['js', 'css', 'png', 'jpg', 'gif', 'map', 'mp3', 'mp4', 'swf', 'svg'],
    },
  });

  // CodeMirror JS
  app.import('node_modules/codemirror/lib/codemirror.js', { outputFile: 'codemirror.js' });
  app.import('node_modules/codemirror/mode/htmlmixed/htmlmixed.js', {
    outputFile: 'codemirror.js',
  });
  app.import('node_modules/codemirror/mode/xml/xml.js', { outputFile: 'codemirror.js' });
  app.import('node_modules/codemirror/mode/css/css.js', { outputFile: 'codemirror.js' });
  app.import('node_modules/codemirror/mode/javascript/javascript.js', {
    outputFile: 'codemirror.js',
  });
  app.import('node_modules/codemirror/addon/lint/lint.js', {
    outputFile: 'codemirror.js',
  });

  return app.toTree();
};
