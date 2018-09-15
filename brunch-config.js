'use strict';

exports.config = {
    paths: {
        'public': 'web',
        'watched': ['build']
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
            joinTo: 'css/app.css'
        },
        templates: {
            joinTo: 'js/app.js'
        }
    },
    modules: {
        autoRequire: {
            'app.js': ['build/main.js']
        },
        sass:{
            mode: 'native'
        }
    },
    npm: {
        enabled: true
    },
    plugins: {
        babel: {},
        copycat:{
            "images": ["./build/images"],
            // "js": ['./node_modules/jquery/dist/jquery.slim.js'],
            verbose : false, //shows each file that is copied to the destination directory
            onlyChanged: true //only copy a file if it's modified time has changed (only effective when using brunch watch)
        },
        uglify: {
            mangle: false,
            compress: {
                global_defs: {
                    DEBUG: true
                }
            }
        }
    }
};