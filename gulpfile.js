/*
 *
 *
 */

'use strict';

// Include Gulp & Tools We'll Use
var gulp = require('gulp');

gulp.task('generate-service-worker', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  var rootDir = 'pwa';

  swPrecache.write(path.join(rootDir, 'service-worker.js'), {
    staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif,mp3,svg}',
											],
    stripPrefix: rootDir,
	  navigateFallback: '/',
  }, callback);
});

