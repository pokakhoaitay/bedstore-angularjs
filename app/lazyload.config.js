/**
 * Created by Poka on 2/20/2016.
 */
define(['app'], function (app) {
   app.config(Config)
        .constant('MODULE_CONFIG', [
            {
                name: 'oc.app',
                module: false,
                files: [
                    'views/partials/sidebar/_sidebar.js',
                    'views/partials/top-menu/_topMenu.js',
                ]
            },
            {
                name: 'oc.home',
                module: false,
                files: [
                    'views/ui/home/home.js',
                    'bower_components/slider-revolution/src/js/jquery.themepunch.plugins.min.js',
                    'bower_components/slider-revolution/src/js/jquery.themepunch.revolution.min.js',
                ]
            }, {
                name: '',
                module: false,
                files: []
            }, {
                name: '',
                module: false,
                files: []
            }, {
                name: '',
                module: false,
                files: []
            }, {
                name: '',
                module: false,
                files: []
            }, {
                name: '',
                module: false,
                files: []
            }, {
                name: '',
                module: false,
                files: []
            }, {
                name: '',
                module: false,
                files: []
            }, {
                name: '',
                module: false,
                files: []
            }, {
                name: '',
                module: false,
                files: []
            }, {
                name: '',
                module: false,
                files: []
            },
        ])
    ;

    function Config($ocLazyLoadProvider, MODULE_CONFIG) {
        $ocLazyLoadProvider.config({
            events: true,
            debug: true,
            asyncLoader: require,
            modules: MODULE_CONFIG
        });

    }
})