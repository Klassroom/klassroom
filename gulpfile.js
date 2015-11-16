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
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

var target = {
  stylesheets_src: './public/stylesheets/**/*.scss',
  stylesheets_dist: './dist/stylesheets/',

  scripts_src: [
    './public/scripts/klassroom.js',
    './public/scripts/routes/*.js',
    './public/scripts/controllers/*.js',
    './public/scripts/filters/*.js',
    './public/scripts/directives/*.js',
    './public/scripts/services/*.js'
  ],
  scripts_dist: './dist/scripts/',

  image_src: './public/assets/images/*',
  image_dist: './dist/images/'
};

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
    .pipe(concat('main.js'))
    // .pipe(ngAnnotate())
    .pipe(gulp.dest(target.scripts_dist))
    .pipe(notify('Scripts done!'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('lint', function() {
  return(gulp.src(['./public/scripts/**/*.js', './server.js', './config/**/*.js']))
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

gulp.task('images', function () {
  return gulp.src(target.image_src)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(target.image_dist));
});

gulp.task('default', ['stylesheets', 'scripts', 'browserSync'], function() {
  gulp.watch(target.stylesheets_src, ['stylesheets']);
  gulp.watch(target.scripts_src, ['scripts']);
});