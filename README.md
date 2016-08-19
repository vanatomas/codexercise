## JS-CucumberJS-WebdriverJS

### Environment Setup

1. Global Dependencies
    * Install [Node.js](https://nodejs.org/en/)
    * Or Install Node.js with [Homebrew](http://brew.sh/)
    ```
    $ brew install node
    ```
    * Install Grunt Globally
    ```
    $ npm install -g grunt-cli
    ```
2. Sauce Credentials
    * In the terminal export your Sauce Labs Credentials as environmental variables:
    ```
    $ export SAUCE_USERNAME=<your Sauce Labs username>
	$ export SAUCE_ACCESS_KEY=<your Sauce Labs access key>
    ```
3. Project Dependencies
	* Install Node modules
	```
	$ npm install
	```

### Running Tests

* Tests in Parallel:
	```
	$ grunt
	```
* Single Feature
    ```
    ./node_modules/.bin/cucumber.js features/*.feature
    ```
[Sauce Labs Dashboard](https://saucelabs.com/beta/dashboard/)

### Resources
##### [Sauce Labs Documentation](https://wiki.saucelabs.com/)

##### [SeleniumHQ Documentation](http://www.seleniumhq.org/docs/)

##### [WebdriverJS Documentation](https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs)

##### [Node Documentation](https://nodejs.org/en/docs/)

##### [CucumberJS Documentation](https://github.com/cucumber/cucumber-js)

##### [Grunt Documentation](http://gruntjs.com/getting-started)

