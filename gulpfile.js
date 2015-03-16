'use strict';

var gulp = require('gulp');
var plato = require('plato');
var glob = require('glob');

gulp.task('analyze', function (done) {
  startPlatoVisualizer(done);
});

function startPlatoVisualizer(done) {
  var files = glob.sync('src/**/*.js');
  var excludeFiles = /.*\.test\.js/;

  var options = {
    title: 'Plato Inspections Report',
    exclude: excludeFiles
  };
  var outputDir = 'report/plato';

  plato.inspect(files, outputDir, options, platoCompleted);

  function platoCompleted(report) {
    plato.getOverviewReport(report);
    if (done) {
      done();
    }
  }
}
