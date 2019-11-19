require('dotenv').config();
const driver = require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');


const serverUri = "http://localhost:3000/#";



describe('Log into ShopStream', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    /**
     * Load the ShopStream Login Page.
     * Loads 'http://localhost:3000/#' stored in serverUri
     */
    it('Load The ShopStream Login Page', async function() {
        // Load the page
        await driver.get(serverUri);
    });

    /**
     * Enter Email in Login page.
     */
    it('Enter Email', async function() {
        // enter email
        driver.findElement(By.id('email')).sendKeys('Email Address');
    });

    /**
     * Enter Password in Login page.
     */
    it('Enter password', async function() {
        // enter password
        driver.findElement(By.id('password')).sendKeys('Password');
    });

    /**
     * Click Login Button on Login page.
     * Submits the Login form.
     */
    it('Submit Login Form', async function() {
        // submit login form
        driver.findElement(By.id('signin')).click();
    });


    /**
     * After logged in, change route to the apps home dashboard.
     * Click the main menu drawer button to test that it opens.
     */
    it('Open App Bar Drawer', async function() {
      // route to apps home dashboard
      await driver.get("http://localhost:3000/dashboard");
      // open main menu drawer on left side of dashboard
      driver.findElement(By.id('openMenuDrawer')).click();
    });


    /**
     * Click the main menu drawer arrow to close the main menu drawer.
     */
    it('Close App Bar Drawer', async function() {
      // close main menu drawer on left side of dashboard 
      driver.findElement(By.id('closeMenuDrawer')).click();
    });


    /**
     * Click the logout button in top right of dashboard.
     * Should route a user back to the login screen.
     */
    it('Logout', async function() {
      // click logout
      driver.findElement(By.id('logout')).click();
    });

    
    /**
      * End of test cases use.
      * Closing the browser and exit.
      */
    after(function() {
      // End of test use this.
      browser.quit();
    });
})

















// /**
//  * Dependency Modules
//  */
// var assert = require("assert").strict;
// var webdriver = require("selenium-webdriver");
// require("geckodriver");// Application Server


// const serverUri = "http://localhost:3000/#";
// const appTitle = "ShopStream Software Test";

// /**
//  * Config for Chrome browser
//  * @type {webdriver}
//  */
// var browser = new webdriver.Builder()
//  .usingServer()
//  .withCapabilities({ browserName: "chrome" })
//  .build();
 
//  /**
//  * Config for Firefox browser (Comment Chrome config when you intent to test in Firefox)
//  * @type {webdriver}
//  */
// /*
// var browser = new webdriver.Builder()
//  .usingServer()
//  .withCapabilities({ browserName: "firefox" })
//  .build();


//  *//**
//  * Function to get the title and resolve it it promise.
//  * @return {[type]} [description]
//  */
// function logTitle() {
//  return new Promise((resolve, reject) => {
//   browser.getTitle().then(function(title) {
//    resolve(title);
//   });
//  });
// }

// /**
//  * Sample test case
//  * To check whether the given value is present in array.
//  */
// describe("Array", function() {
//  describe("#indexOf()", function() {
//   it("should return -1 when the value is not present", function() {
//    assert.equal([1, 2, 3].indexOf(4), -1);
//   });
//  });
// });


// describe("Log In To ShopStream", function() {
//  /**
//   * Test case to load our application and check the title.
//   */
//  it("Enter Username", function() {
//   return new Promise((resolve, reject) => {
//    browser
//     .findElement(by.id('email-label'))
//     .then(elem => resolve())
//     .catch(err => reject(err));
//   });
//  });




// //  /**
// //   * Test case to load our application and check the title.
// //   */
// //  it("Should load the home page and get title", function() {
// //   return new Promise((resolve, reject) => {
// //    browser
// //     .get(serverUri)
// //     .then(logTitle)
// //     .then(title => {
// //      assert.strictEqual(title, appTitle);
// //      resolve();
// //     })
// //     .catch(err => reject(err));
// //   });
// //  });
 
 
// //  /**
// //   * Test case to check whether the given element is loaded.
// //   */
// //  it("Should check whether the given element is loaded", function() {
// //   return new Promise((resolve, reject) => {
// //    browser
// //     .findElement({ id: "sel-button" })
// //     .then(elem => resolve())
// //     .catch(err => reject(err));
// //   });
// //  });
 
//  /**
//   * End of test cases use.
//   * Closing the browser and exit.
//   */
//  after(function() {
//   // End of test use this.
//   browser.quit();
//  });
// });