var gulp = require('gulp'); // Require gulp

// // Sass dependencies
// var sass = require('gulp-sass'); // Compile Sass into CSS
// var minifyCSS = require('gulp-minify-css'); // Minify the CSS

// // Minification dependencies
// var minifyHTML = require('gulp-minify-html'); // Minify HTML
// var concat = require('gulp-concat'); // Join all JS files together to save space
// var stripDebug = require('gulp-strip-debug'); // Remove debugging stuffs
// var uglify = require('gulp-uglify'); // Minify JavaScript
// var imagemin = require('gulp-imagemin'); // Minify images

// // Other dependencies
// var size = require('gulp-size'); // Get the size of the project
// var browserSync = require('browser-sync'); // Reload the browser on file changes
// var jshint = require('gulp-jshint'); // Debug JS files
// var stylish = require('jshint-stylish'); // More stylish debugging

// Task to compile Sass file into CSS, and minify CSS into build directory
gulp.task('styles', function() {
  gulp.src('./src/*.js')
    .pipe(gulp.dest('./dist'))
});

gulp.start.apply(gulp, ['styles']);