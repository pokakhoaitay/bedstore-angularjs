/**
 * Created by Poka on 2/21/2016.
 */
var gulp = require('gulp');
//var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
//var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var templateCache = require('gulp-angular-templatecache');
var changed = require('gulp-changed');
var cache = require('gulp-cached');
var rimraf = require('gulp-rimraf');
var rename = require("gulp-rename");
var cssnano = require('gulp-minify-css');//require('gulp-cssnano');
var ngAnnotate = require('gulp-ng-annotate');
var gulpFilter = require('gulp-filter');
var gulpif = require('gulp-if');
var mainBowerFiles = require('main-bower-files');


var config = {
    src: './app/',
    dest: './.build/',
    bowerSrc: 'app/libs/',
    isProd: 1,
    srcMap: 0,
};

gulp.task('clean', function () {
    return del([config.dest]);
});

gulp.task('default', ['proxy', 'bower_public', 'assets', 'level1','views'], function () {

});


gulp.task('proxy', ['clean'], function () {
    return gulp.src([
            './app/proxy/**/*.*',
            './app/proxy/*.*',
            './app/proxy/.htaccess',
        ], {base: config.src})
        .pipe(gulp.dest(config.dest));
});

gulp.task('assets', ['clean'], function () {
    var cssFilter = gulpFilter('**/*.css', {restore: true});
    var jsFilter = gulpFilter('**/*.js', {restore: true});
    //var imgFilter = gulpFilter(['**/*.png', '**/*.gif'], {restore: true});
    //var svgFilter = gulpFilter(['**/*.svg', '**/*.ttf', '**/*.eot', '**/*.woff'], {restore: true});
    return gulp.src(['./app/assets/**/*.*', '!./app/assets/**/*.scss'], {base: config.src})
        .pipe(cssFilter)
        .pipe(gulpif(config.srcMap, sourcemaps.init()))
        .pipe(gulpif(config.isProd, cssnano()))
        .pipe(gulpif(config.srcMap, sourcemaps.write('/')))
        .pipe(cssFilter.restore)
        .pipe(jsFilter)
        .pipe(gulpif(config.srcMap, sourcemaps.init()))
        .pipe(ngAnnotate())
        .pipe(gulpif(config.isProd, uglify()))
        .pipe(gulpif(config.srcMap, sourcemaps.write('/')))
        .pipe(jsFilter.restore)
        .pipe(gulp.dest(config.dest));
});

gulp.task('views', ['clean'], function () {
    var cssFilter = gulpFilter('**/*.css', {restore: true});
    var jsFilter = gulpFilter('**/*.js', {restore: true});
    //var imgFilter = gulpFilter(['**/*.png', '**/*.gif'], {restore: true});
    //var svgFilter = gulpFilter(['**/*.svg', '**/*.ttf', '**/*.eot', '**/*.woff'], {restore: true});
    return gulp.src(['./app/views/**/*.*', '!./app/views/**/*.scss'], {base: config.src})
        .pipe(cssFilter)
        .pipe(gulpif(config.srcMap, sourcemaps.init()))
        .pipe(gulpif(config.isProd, cssnano()))
        .pipe(gulpif(config.srcMap, sourcemaps.write('/')))
        .pipe(cssFilter.restore)
        .pipe(jsFilter)
        .pipe(gulpif(config.srcMap, sourcemaps.init()))
        .pipe(ngAnnotate())
        .pipe(gulpif(config.isProd, uglify()))
        .pipe(gulpif(config.srcMap, sourcemaps.write('/')))
        .pipe(jsFilter.restore)
        .pipe(gulp.dest(config.dest));
});

gulp.task('level1', ['clean'], function () {
    var cssFilter = gulpFilter('**/*.css', {restore: true});
    var jsFilter = gulpFilter('**/*.js', {restore: true});
    //var imgFilter = gulpFilter(['**/*.png', '**/*.gif'], {restore: true});
    //var svgFilter = gulpFilter(['**/*.svg', '**/*.ttf', '**/*.eot', '**/*.woff'], {restore: true});
    return gulp.src(['./app/*.*', './app/robots.txt', './app/.htaccess', '!./app/*.scss', '!./app/.editorconfig', '!./app/.gitattributes', '!./app/LICENSE.txt', '!./app/humans.txt', '!./app/*.xml',]
        , {base: config.src})
        .pipe(cssFilter)
        .pipe(gulpif(config.srcMap, sourcemaps.init()))
        .pipe(gulpif(config.isProd, cssnano()))
        .pipe(gulpif(config.srcMap, sourcemaps.write('/')))
        .pipe(cssFilter.restore)
        .pipe(jsFilter)
        .pipe(gulpif(config.srcMap, sourcemaps.init()))
        .pipe(ngAnnotate())
        .pipe(gulpif(config.isProd, uglify()))
        .pipe(gulpif(config.srcMap, sourcemaps.write('/')))
        .pipe(jsFilter.restore)
        .pipe(gulp.dest(config.dest));
});

gulp.task('bower_public', ['clean'], function () {
    var cssFilter = gulpFilter('**/*.css', {restore: true});
    var jsFilter = gulpFilter('**/*.js', {restore: true});
    return gulp.src(mainBowerFiles({
            overrides: {
                'slider-revolution': {
                    main: ['./src/**/*.*']
                }
            }
        }), {base: config.bowerSrc})
        .pipe(cssFilter)
        .pipe(gulpif(config.srcMap, sourcemaps.init()))
        .pipe(gulpif(config.isProd, cssnano()))
        .pipe(gulpif(config.srcMap, sourcemaps.write('/')))
        .pipe(cssFilter.restore)
        .pipe(jsFilter)
        .pipe(gulpif(config.srcMap, sourcemaps.init()))
        .pipe(ngAnnotate())
        .pipe(gulpif(config.isProd, uglify()))
        .pipe(gulpif(config.srcMap, sourcemaps.write('/')))
        .pipe(jsFilter.restore)
        .pipe(gulp.dest(config.dest + 'libs'));
});