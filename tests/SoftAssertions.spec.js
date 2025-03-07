//import { test, expect} from ('@playwright/test');

const{ test, expect}= require('@playwright/test');

test('soft-Assertions', async({page})=>{

    /*
    //Hard Assertions
    await page.goto('https://www.demoblaze.com/');
    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://www.demoblaze.com/');
    await expect(page.locator('//a[@id="nava"]')).toBeVisible();
    */

    //Soft Assertions

    await page.goto('https://www.demoblaze.com/');
    await expect.soft(page).toHaveTitle('STORE');
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/');
    await expect.soft(page.locator('//a[@id="nava"]')).toBeVisible();

})