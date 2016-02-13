/**
 * Created by Poka on 2/13/2016.
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


var basePaths = {
    src: './app/',
    dest: './.prod/',
    bowerSrc: 'app/bower_components/'
};


var paths = {
    jsUsed: [
        './app/assets/js/vendor/modernizr-2.8.3.min.js',
        './app/bower_components/angular/angular.min.js',
        './app/bower_components/angular-cookies/angular-cookies.min.js',
        './app/bower_components/angular-ui-router/release/angular-ui-router.min.js',
        './app/bower_components/angular-animate/angular-animate.min.js',
        './app/bower_components/angular-aria/angular-aria.min.js',
        './app/bower_components/angular-messages/angular-messages.min.js',
        //'./app/bower_components/angular-material/angular-material.min.js',
        './app/assets/js/vendor/jquery-1.11.3.min.js',
        './app/bower_components/angular-md5/angular-md5.min.js',
        './app/bower_components/svg4everybody/dist/svg4everybody.min.js',
    ],
    jsSpecial: [
        './app/bower_components/slider-revolution/src/js/jquery.themepunch.plugins.min.js',
        './app/bower_components/slider-revolution/src/js/jquery.themepunch.revolution.min.js',
    ],
    jsMineUsed: [
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
    cssUsed: []
}

/*--------------------------------------------------
 * CLEAN
 *--------------------------------------------------*/
gulp.task('clean', function () {
    return gulp.src([basePaths.dest, '!' + basePaths.dest + 'assets/js/vendor/app.vendor.min.js', '!' + basePaths.dest + 'assets/js/app.main.min.js'], {read: false})
        .pipe(rimraf({force: false}));
});


gulp.task('js.vendor', function () {
    return gulp.src(paths.jsUsed)
        .pipe(concat('app.vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(basePaths.dest))
        ;
});

gulp.task('js.main', function () {
    return gulp.src(paths.jsMineUsed)
        .pipe(cache('js.main'))
        .pipe(concat('app.main.min.js'))
        .pipe(uglify())
        //.pipe(changed(basePaths.dest))
        .pipe(gulp.dest(basePaths.dest))
        ;
});

gulp.task('js.spec', function () {
    return gulp.src(paths.jsSpecial, {base: basePaths.bowerSrc})
        .pipe(cache('js.spec'))
        .pipe(uglify())
        //.pipe(changed(basePaths.dest))
        .pipe(gulp.dest(basePaths.dest + 'assets/js/vendor'))
        ;
});


gulp.task('default', ['js.vendor', 'js.main', 'js.spec'], function () {
    return gulp.src([
            './app/assets/**/*.*',
            './app/views/**/*.*',
            './app/*.*',
            './app/.htaccess',

            '!./app/*.js',
            '!./app/index.html',
            '!./app/assets/**/*.css',
            '!./app/assets/**/*.js',
            '!./app/assets/**/*.scss',
            '!./app/assets/**/*.map',
        ], {base: basePaths.src})
        .pipe(gulp.dest(basePaths.dest));
});


gulp.task('htmlTemplate', function () {
    return gulp.src([
            './app/views/**/*.html',
        ])
        .pipe(templateCache({
            standalone: true,
            base: function (file) {
                var filename = /[^/]*$/.exec(file.relative)[0];
                return 'views/' + filename;
            }
        }))
        .pipe(gulp.dest(basePaths.dest));
});


