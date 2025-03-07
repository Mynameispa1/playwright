import {test, expect } from "@playwright/test";

test('checkboxes',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('//input[@id="sunday"]').check();

    await expect(await page.locator('//input[@id="sunday"]')).toBeChecked();

    await expect(await page.locator('//input[@id="sunday"]').isChecked()).toBeTruthy();

    await expect(await page.locator('//input[@id="saturday"]').isChecked()).toBeFalsy();

    //Select Multiple checkboxes
    const checkboxeLocators=[

              '//input[@id="sunday"]',
              '//input[@id="saturday"]',
              '//input[@id="monday"]'
                            ];

    for(const locator of checkboxeLocators)
        {
            await page.locator(locator).check();
        }                     

    await page.waitForTimeout(2000);   
    
    //Un-Select selected checkboxes
    for(const locator of checkboxeLocators)
    {
        if(await page.locator(locator).isChecked())
        {
            await page.locator(locator).uncheck();
        }
        
    }

    await page.waitForTimeout(2000);  

})