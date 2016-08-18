'use strict';

var fs = require('fs');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var SauceLabs = require('saucelabs');
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

var World = function World() {

    var defaultTimeout = 20000;

    this.webdriver = webdriver;
    this.driver = driver;



    this.waitFor = function(cssLocator, timeout) {
        var waitTimeout = timeout || defaultTimeout;
        return driver.wait(function() {
            return driver.isElementPresent({ css: cssLocator });
        }, waitTimeout);
    };
};

module.exports.World = World;
module.exports.getDriver = getDriver;