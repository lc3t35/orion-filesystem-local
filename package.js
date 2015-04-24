Package.describe({
  name: 'lc3t35:orion-filesystem-local',
  summary: 'Local storage for orion:filesystem',
  version: '0.1.0',
  git: 'https://github.com/lc3t35/orion-filesystem-local'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'orionjs:core',
    'orionjs:filesystem',
    'cfs:standard-packages',
    'cfs:filesystem',
    'underscore'
    ]);

  api.addFiles([
    'filesystem-local.js',
    ]);

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('orionjs:filesystem');
});
