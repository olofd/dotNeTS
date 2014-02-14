// Karma configuration
// Generated on Mon Feb 10 2014 23:14:46 GMT+0100 (W. Europe Standard Time)


module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks :['jasmine'],
    files: [
      'bower_components/lodash/dist/lodash.js',
      'src/dotNeTS/Exception.js',
      'src/**/*.js',
      'test/spec/**/*.js'
    ],
    exclude: [
      
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Firefox'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 6000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
