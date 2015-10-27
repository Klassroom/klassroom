var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var ngAnnotate = require('gulp-ng-annotate');
var jshint = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');
var jade = require('gulp-jade');
var clean = require('gulp-clean');

var target = {
  views_src: './app/views/**/*.jade',
  views_dist: './dist/',

  stylesheets_src: './app/stylesheets/**/*.scss',
  stylesheets_dist: './dist/stylesheets/',

  scripts_src: './app/scripts/**/*.js',
  scripts_dist: './dist/scripts/'
};

gulp.task('views', function() {
  return gulp.src(target.views_src)
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest(target.views_dist))
    .pipe(notify('Views done!'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('stylesheets', function() {
  return gulp.src(target.stylesheets_src)
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest(target.stylesheets_dist))
    .pipe(notify('Stylesheets done!'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', function() {
  return gulp.src(target.scripts_src)
    .pipe(plumber())
    .pipe(ngAnnotate())
    .pipe(gulp.dest(target.scripts_dist))
    .pipe(notify('Scripts done!'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('lint', function() {
  return(gulp.src(['.client/scripts/**/*.js', './server.js', './config/**/*.js']))
    .pipe(plumber())
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter(jshintStylish));
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './dist'
    },
    options: {
      reloadDelay: 250
    },
    notify: false
  });
});

gulp.task('clean', function() {
  return gulp.src('./dist', {read: false})
    .pipe(clean())
});

gulp.task('default', ['clean', 'views', 'stylesheets', 'scripts', 'browserSync'], function() {
  gulp.watch(target.views_src, ['views']);
  gulp.watch(target.stylesheets_src, ['stylesheets']);
  gulp.watch(target.scripts_src, ['scripts']);
});