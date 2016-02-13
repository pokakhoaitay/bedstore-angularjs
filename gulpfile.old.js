/**
 * Created by Poka on 2/13/2016.
 */
var gulp = require('gulp');
//var coffee = require('gulp-coffee');
//var concat = require('gulp-concat');
//var uglify = require('gulp-uglify');
//var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

var basePaths = {
    src: './app/',
    dest: './.build/',
    bowerSrc: 'app/bower_components/'
};

var paths = {
    js: [
        './app/assets/js/vendor/modernizr-2.8.3.min.js',
        './app/bower_components/angular/angular.min.js',
        './app/bower_components/angular-cookies/angular-cookies.min.js',
        './app/bower_components/angular-ui-router/release/angular-ui-router.min.js',
        './app/bower_components/angular-animate/angular-animate.min.js',
        './app/bower_components/angular-aria/angular-aria.min.js',
        './app/bower_components/angular-messages/angular-messages.min.js',
        './app/bower_components/angular-material/angular-material.min.js',
        './app/assets/js/vendor/jquery-1.11.3.min.js',
        './app/bower_components/slider-revolution/src/js/jquery.themepunch.plugins.min.js',
        './app/bower_components/slider-revolution/src/js/jquery.themepunch.revolution.min.js',
        './app/bower_components/angular-md5/angular-md5.min.js',
        './app/assets/js/plugins.js',
        './app/assets/js/main.js',
        './app.js',
        './app.config.js',
        './app.ctrl.js',
        './app/assets/js/my-utils/utils.js',
        './app/assets/js/implement/ApiHttpInterceptor.js',
        './app/assets/js/services/app.service.js',
        './app/assets/js/services/session.service.js',
        './app/assets/js/services/contact.service.js',
        './app/assets/js/services/test.service.js',
        './app/views/ui/home/home.js',
        './app/views/ui/about/about.js',
        './app/views/partials/top-menu/_topMenu.js',
        './app/views/partials/left-sidenav/_leftSidenav.js',
        './app/views/ui/build-a-bed/buildABed.js',
        './app/views/ui/contact/contact.js',
        './app/bower_components/svg4everybody/dist/svg4everybody.min.js',
    ],
    scripts: [
        './app/assets/js/vendor/modernizr-2.8.3.min.js',
        './app/assets/js/vendor/jquery-1.11.3.min.js',
        './app/assets/js/plugins.js',
        './app/assets/js/main.js',
        './app.js',
        './app.config.js',
        './app.ctrl.js',
        './app/assets/js/my-utils/utils.js',
        './app/assets/js/implement/ApiHttpInterceptor.js',
        './app/assets/js/services/app.service.js',
        './app/assets/js/services/session.service.js',
        './app/assets/js/services/contact.service.js',
        './app/assets/js/services/test.service.js',
        './app/views/ui/home/home.js',
        './app/views/ui/about/about.js',
        './app/views/partials/top-menu/_topMenu.js',
        './app/views/partials/left-sidenav/_leftSidenav.js',
        './app/views/ui/build-a-bed/buildABed.js',
        './app/views/ui/contact/contact.js',
    ],
    images: '',
    css: [
        './app/assets/js/vendor/google-material-icons/style.css',
        './app/assets/css/normalize.css',
        './app/bower_components/angula-material/angular-material.min.css',
        './app/assets/js/vendor/outline-icons/themify-icons/themify-icons.css',
        './app/assets/js/vendor/outline-icons/Tonicons-Outline/style.css',
        './app/bower_components/slider-revolution/src/css/settings.css',
        './app/assets/svgs/svg-icon-default.theme.css',
        './app/assets/css/main.css',
        './app/assets/css/app.css',
        './',
    ],
    htmls: []
};




gulp.task('clean', function () {
    return del([basePaths.dest]);
});

gulp.task('scripts', function () {
    return gulp.src(paths.scripts, {base: basePaths.src})
        .pipe(gulp.dest(basePaths.dest));
});


gulp.task('css', function () {
    return gulp.src(paths.css, {base: basePaths.src})
        .pipe(gulp.dest(basePaths.dest));
});


gulp.task('bower.js', function () {
    return gulp.src([
            './app/bower_components/**/*.js',
            '!./app/bower_components/**/documentation/**',
            '!./app/bower_components/**/examples/**',
            '!./app/bower_components/**/*.min.js',
            '!./app/bower_components/**/*index.js',
        ], {base: basePaths.src + 'bower_components/'})
        .pipe(gulp.dest(basePaths.dest + 'assets/js/vendor/'));
});

gulp.task('bower.css', function () {
    return gulp.src([
            './app/bower_components/**/*.css',
            '!./app/bower_components/**/documentation/**',
            '!./app/bower_components/**/examples/**',
            '!./app/bower_components/**/*.min.css',
            '!./app/bower_components/**/*index.css',
        ], {base: basePaths.src + 'bower_components/'})
        .pipe(gulp.dest(basePaths.dest + 'assets/js/vendor/'));
});


gulp.task('bower.vendor.all', function () {
    return gulp.src([
            './app/bower_components/slider-revolution/src/**/*.*'
        ], {base: basePaths.src + 'bower_components/'})
        .pipe(gulp.dest(basePaths.dest + 'assets/js/vendor/'));
});