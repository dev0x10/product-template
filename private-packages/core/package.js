Package.describe({
  name: 'core',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('1.0.3.2');

  api.use('iron:router@1.0.0');
  api.imply('iron:router');

  api.addFiles('lib/app.js');

  api.export('App');

});

Package.onTest(function(api) {
  api.use('tinytest');
});
