var gulp = require('gulp'),
  browserSync = require('browser-sync').create();

gulp.task('serve', function () {
  browserSync.init({
    server: './',
    open: 'external'
  });
});

gulp.task('default', gulp.series('serve'));
