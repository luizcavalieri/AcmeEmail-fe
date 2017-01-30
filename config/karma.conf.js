module.exports = function (config) {
    var _config = {

        // The root path location that will be used to resolve all relative paths defined in files and exclude.
        // If the basePath configuration is a relative path, then it will be resolved to the __dirname of the
        // configuration file.
        basePath: '',

        // frameworks to use
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            {
                pattern: './config/karma-test-shim.js',
                watched: false
            },
        ],

        // list of files to exclude
        exclude: [],

        // A map of preprocessors to use.
        preprocessors: {
            './config/karma-test-shim.js': ['coverage', 'webpack'],
        },

        // Import webpack test config
        webpack: require('./webpack.test'),

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        coverageReporter: {
            type: 'in-memory'
        },

        // Remap coverage reporter
        // Used to convert js into ts reporting
        remapCoverageReporter: {
            'text-summary': null,
            json: './coverage/coverage.json',
            html: './coverage/html'
        },

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage', 'remap-coverage'
        reporters: ['mocha', 'coverage', 'remap-coverage'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['PhantomJS'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true,
    };

    config.set(_config);
};
