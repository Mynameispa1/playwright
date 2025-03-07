import {test, expect } from "@playwright/test";


test('inputBoxes', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const name=await page.locator('#name');

    await expect(name).toBeVisible();
    await expect(name).toBeEnabled();
    await expect(name).toBeEditable();
    await expect(name).toBeEmpty();

    await page.fill('#name','pavan123');

    await page.waitForTimeout(5000);


})