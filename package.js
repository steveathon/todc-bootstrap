// package metadata file for Meteor.js

Package.describe({
  name: 'todc:todc-bootstrap', // https://atmospherejs.com/todc/todc-bootstrap
  summary: 'Google-styled theme for Bootstrap.',
  version: '4.3.1-4.3.1-alpha',
  git: 'https://github.com/todc/todc-bootstrap.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery', 'client');
  api.addFiles([
    'dist/css/bootstrap.css',
    'dist/css/todc-bootstrap.css',
    'dist/js/bootstrap.js'
  ], 'client');
});
