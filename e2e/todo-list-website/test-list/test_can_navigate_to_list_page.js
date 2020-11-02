const {Builder, By, Key, until} = require('selenium-webdriver');

(async function canNavigateToListPage() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        // Navigate to Url
        await driver.get('http://localhost:3000/');

        driver.findElement(By.id('list-page-title')).then(null, function(err) {
            if (err.name === "NoSuchElementError")
                console.log("Element was missing!");
        });
    }
    catch(e) {
        console.log("Couldn't navigate to page!");
    }
    finally{
        driver.quit();
    }
})();
