const {Builder, By, Key, until} = require('selenium-webdriver');

(async function canNavigateToListPage() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        // Navigate to Url
        await driver.get('http://localhost:3000/');

        driver.findElement(By.id('navigate-to-create-page-button')).then(null, function(err) {
            if (err.name === "NoSuchElementError")
                console.log("Element was missing!");
        });
    }
    finally{
        driver.quit();
    }
})();
