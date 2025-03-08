import {test, expect } from "@playwright/test";

test('Hidden dropdown',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator('[name="username"]').click();
    await page.locator('[name="password"]').click();
    await page.locator('[type="submit"]').click();

    await page.locator('//span[normalize-space()="PIM"]').click();
    
})