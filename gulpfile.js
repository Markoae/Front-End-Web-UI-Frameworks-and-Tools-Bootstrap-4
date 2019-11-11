'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-Sync');

 
gulp.task('sass', function () {
    return gulp.src('./css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});
      
gulp.task('sass:watch', function () {
	gulp.watch('./css/*.scss', gulp.series('sass'));
});
      
gulp.task('browser-sync', function () {
     var files = [
        './*.html',
        './css/*.css',
        './img/*.{png,jpg,gif}',
        './js/*.js'
        ];
      
         browserSync.init(files, {
            server: {
               baseDir: "./"
            }
         });
      
});
      
// Default task
gulp.task('default', gulp.series('browser-sync', 'sass:watch'));