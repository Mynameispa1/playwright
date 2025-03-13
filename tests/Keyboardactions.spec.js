import { test,expect } from "@playwright/test";

test('KeyboardActions',async({page})=>{

    await page.goto('https://gotranscript.com/text-compare');

    // page.locator('name="text1"').fill('Welcome to Javascript');
    await page.fill("//textarea[@placeholder='Paste one version of the text here.']",'Welcome to Javascript');

    //Ctrl+A
    await page.keyboard.press('Control+A');

    //Ctrl+C
    await page.keyboard.press('Control+C'); // Ctrl and C to actions, So we should use press method/function

    //Tab
    await page.keyboard.up('Tab');
    await page.keyboard.down('Tab');        //one action, so we can use up or down method/function

    //Ctrl+V
    await page.keyboard.press('Control+V');


    await page.waitForTimeout(3000);



})