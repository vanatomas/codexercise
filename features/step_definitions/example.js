'use strict';

var expect = require('chai').expect;


module.exports = function() {
    this.World = require('../support/world.js').World;

    this.Given(/^User on the sauce guinea pig page$/, function () {
        this.driver.get('https://saucelabs.com/test/guinea-pig');
    });

    this.Then(/^User selects first checkbox$/, function () {
        this.driver.findElement({name: "unchecked_checkbox"}).click();
    });

    this.Then(/^User types email id into the email input field$/, function () {
        this.driver.findElement({css: "#fbemail"}).sendKeys("saucedemo@gmail.com");
    });

    this.Then(/^the email input value field should contain saucedemo@gmail.com$/, function () {
        this.driver.findElement({css: "#fbemail"}).getText().then(function(email) {
            assert(email.contains("saucedemo@gmail.com"))
    });

    });

    this.Given(/^User on the sauce page$/, function () {
         this.driver.get('https://saucelabs.com/');
    });

    this.Then(/^User clicks on Pricing$/, function () {
        this.driver.findElement({xpath: "//a[@data-reactid='40'"}).click();
    });

    this.Then(/^User locates Individual plan$/, function () {
       this.driver.findElement({xpath: "//div[@data-reactid='31']'" }).getText().then(function(the_page_source) {
            assert(the_page_source.contains("Pricing"))
        });
    });

    this.Then(/^User validates Individual plan cost$/, function () {
        this.driver.findElement({xpath: "//div[@data-reactid='31']'" }).getText().then(function(the_page_source) {
            assert(the_page_source.contains("99"))
        });
    });

    this.Then(/^User clicks I am a link$/, function () {
        this.driver.findElement({id: "#i am a link"}).click();
        this.driver.findElement({id: "#i_am_an_id"}).getText().then(function(the_page_source) {
            assert(the_page_source.contains("I am another div"))
        });

    });
};
