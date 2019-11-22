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

    it('Click On Jobs Button', async function() {
      // open main menu drawer on left side of dashboard
      driver.findElement(By.id('jobsButton')).click();
    });


    it('Open App Bar Drawer', async function() {
      // route to apps home dashboard
      await driver.get("http://localhost:3000/jobs");
      // open main menu drawer on left side of dashboard
      driver.findElement(By.id('openMenuDrawer')).click();
    });


    it('Click On Inventory Button', async function() {
      // open main menu drawer on left side of dashboard
      driver.findElement(By.id('invButton')).click();
    });


    it('Open App Bar Drawer', async function() {
      // route to apps home dashboard
      await driver.get("http://localhost:3000/inventory");
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
