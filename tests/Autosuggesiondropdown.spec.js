import {test, expect } from "@playwright/test";

test('Autosuggesiondropdown',async({page})=>{

    await page.goto('https://www.redbus.in/');

    //await page.locator('#src').fill('Hyderabad');
    page.fill('#src','Hyderabad')
    await page.waitForSelector("//*[contains(@class,'sc-iwsKbI')]//text[1]");

    var options=await page.$$("//*[contains(@class,'sc-iwsKbI')]//text[1]");

    for(var option of options)
    {
        var value=await option.textContent();
        //console.log(value);
        if(value.includes('Ameerpet'))
        {
            await option.click();
            break;
        }

    }

    await page.waitForTimeout(5000);
})