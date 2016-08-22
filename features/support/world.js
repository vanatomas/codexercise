'use strict';

var fs = require('fs');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    SauceLabs = require('saucelabs');
var platform = process.env.PLATFORM || "FIREFOX";

chai.use(chaiAsPromised);
chai.should();


var buildChromeDriver = function() {
    return new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();
};

var buildFirefoxDriver = function() {
    return new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.firefox()).
    build();
};

switch(platform) {
    case 'FIREFOX':
        var driver = buildFirefoxDriver();
        break;
    default:
        var driver = buildChromeDriver();
}

var getDriver = function() {
    return driver;
};

module.exports = function() {
    // setup remote browser that wil be launched in saucelabs
    global.client = wd.remote({
        desiredCapabilities: {
            browserName: process.env.browserName,
            platform: process.env.platform,
            version: process.env.version,
            name: process.env.name
        },
        user: process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY,
        host: 'ondemand.saucelabs.com',
        port: 80,
        logLevel: "silent"
    });
};
    // setup promises
    chaiAsPromised.transferPromiseness = global.client.transferPromiseness;

var World = function World() {

    var defaultTimeout = 20000;

    this.webdriver = webdriver;
    this.driver = driver;


    global.client.addCommand('sauceJobStatus', function(status, done) {
        var sauceAccount = new SauceLabs({
            username: process.env.SAUCE_USERNAME,
            password: process.env.SAUCE_ACCESS_KEY
        });

        sauceAccount.updateJob(sessionID, status, done);
    });


    this.waitFor = function(cssLocator, timeout) {
        var waitTimeout = timeout || defaultTimeout;
        return driver.wait(function() {
            return driver.isElementPresent({ css: cssLocator });
        }, waitTimeout);
    };
};

module.exports.World = World;
module.exports.getDriver = getDriver;