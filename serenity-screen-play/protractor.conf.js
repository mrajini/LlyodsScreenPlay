const
    glob         = require('glob'),
    protractor   = require.resolve('protractor'),
    node_modules = protractor.substring(0, protractor.lastIndexOf('node_modules') + 'node_modules'.length),
    seleniumJar  = glob.sync(`${node_modules}/protractor/**/selenium-server-standalone-*.jar`).pop();

exports.config = {

    baseUrl: 'https://online.lloydsbank.co.uk',
    seleniumServerJar: seleniumJar,
    allScriptsTimeout: 110000,
    disableChecks: true,
    ignoreUncaughtExceptions: true,
    framework: 'custom',
    // frameworkPath: require.resolve('protractor-cucumber-framework'),
    frameworkPath: require.resolve('serenity-js'),
    specs: [ 'features/**/*.feature' ],

    cucumberOpts: {
        require:    [ 'features/**/*.ts' ],
        format:     'pretty',
        compiler:   'ts:ts-node/register'
    },

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                'disable-infobars',
                // 'disable-Angular.js'
                // 'incognito',
                // 'disable-extensions',
                // 'show-fps-counter=true'
            ]
        }
    }
};
