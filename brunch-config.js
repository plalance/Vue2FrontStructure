'use strict';

exports.config = {
    paths: {
        'public': 'web',
        'watched': ['build/']
    },
    conventions: {
        'assets': /^build\/assets/
    },
    files: {
        javascripts: {
            joinTo: {
                'js/app.js': /^build/,
                'js/vendor.js': /^(?!build)/
            }
        },
        stylesheets: {
            joinTo: {
                'css/main.css' : 'build/scss/main.scss'
            }
        },
        templates: {
            joinTo: 'js/app.js'
        }
    },
    modules: {
        autoRequire: {
            'app.js': ['build/main.js']
        }
    },
    npm: {
        enabled: true
    },
    plugins: {
        babel: {},
        copycat:{
            "images": ["./build/images"],
            "js": ['./node_modules/jquery/dist/jquery.slim.js'],
            verbose : false, //shows each file that is copied to the destination directory
            onlyChanged: true //only copy a file if it's modified time has changed (only effective when using brunch watch)
        },
        postcss: {
            modules: true,
        },
        uglify: {
            mangle: false,
            compress: {
                global_defs: {
                    DEBUG: true
                }
            }
        },
        // Globales se déclarent ic ou dans les fichiers js avec import ... from '...'
        globals: {
            $: 'jquery',
            jQuery: 'jquery'
        }
    }
};