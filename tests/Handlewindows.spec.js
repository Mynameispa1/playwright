const {test, expect,chromium } = require("@playwright/test");

test.skip('Handle-windows',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.click("//a[normalize-space()='OrangeHRM, Inc']");

    await page.waitForTimeout(5000);

})

//If you don't want to use thr page fixer. If you want to create your own page
test('Handle-windows-with-myownpage',async({})=>{

    const browser=await chromium.launch();
    const context=await browser.newContext();

    const page1=await context.newPage();
    //const page2=await context.newPage();

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle('OrangeHRM');

    await page1.waitForTimeout(5000);

    const pagePromise=context.waitForEvent('page');
    await page1.click("//a[normalize-space()='OrangeHRM, Inc']");
    const page2=await pagePromise;
    await expect(page2).toHaveTitle('Human Resources Management Software | OrangeHRM');

})