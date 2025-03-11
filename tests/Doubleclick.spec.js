import { test,expect } from "@playwright/test";

test('Doubleclick',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const double=await page.locator("//button[normalize-space()='Copy Text']");

    await double.dblclick();   //dblclick()
    const f2=await page.locator("//input[@id='field2']");
    await expect(f2).toHaveValue('Hello World!');
    

    await page.waitForTimeout(3000)


})