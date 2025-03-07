import { test, expect } from "@playwright/test";

test('multidropdown',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Select multiple option from dropdown
    //await page.selectOption('//label[normalize-space()="Colors:"]','Yellow');  //single option
    //await page.selectOption('//label[normalize-space()="Colors:"]',['Yellow','Blue','Red']); //selecting multiple options

    //Assertions
    //check number of options in a dropdown
    // const options=await page.locator('#colors option')
    // await expect(options).toHaveCount(7);

    //Approach-2
    //const options=await page.$$('#colors option');
    //await console.log(options.length);
    //await expect(options.length).toBe(7);

    //check the presence of value in the dropdown
    const content=await page.locator('#colors').textContent();
    await expect(content.includes('Blue')).toBeTruthy();
    await expect(content.includes('Black')).toBeFalsy();

    await page.waitForTimeout(5000);

})