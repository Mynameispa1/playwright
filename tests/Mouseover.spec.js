import {test, expect } from "@playwright/test";

test('MouseOver',async({page})=>{

    await page.goto('https://demo.opencart.com/');

    const Desktop=await page.locator("//a[normalize-space()='Desktops']");
    const mac=await page.locator("//a[normalize-space()='Mac (1)']");

    //mouseover
    await Desktop.hover();
    await mac.hover();
})