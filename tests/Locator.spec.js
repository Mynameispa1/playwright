const{test, expect }=require('@playwright/test');

test('Locators', async({page})=>{

    await page.goto('https://www.demoblaze.com/');

    await page.locator("//a[@id='login2']").click();

    await page.fill('//input[@id="loginusername"]','pavan1992');

    await page.fill('//input[@id="loginpassword"]','test@123');

    await page.locator('//button[normalize-space()="Log in"]').click();

    const lnklogout=await page.locator('//a[@id="logout2"]');

    await expect(lnklogout).toBeVisible();

    await page.close();

})