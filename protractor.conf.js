/*jslint node: true */
/*global createFolderGlobs:true */
exports.config =  {
  specs: ['**/*-e2e.js'],
  baseUrl: 'http://localhost:9001/',
  maxSessions: 1,
  multiCapabilities: [
    { browserName: 'chrome' }
  ]
};
