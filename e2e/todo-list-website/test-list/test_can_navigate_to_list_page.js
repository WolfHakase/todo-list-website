const {Builder, By, Key, until} = require('selenium-webdriver');

(async function canNavigateToListPage() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        // Navigate to Url
        await driver.get('http://localhost:3000/');
    }
    finally{
        driver.quit();
    }
})();
