import {test, expect } from "@playwright/test";
import { equal } from "assert";

test('dropdown',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    //1) await page.locator('#country').selectOption({label:'India'});
    //2)await page.locator('#country').selectOption({value:'japan'});
    //3)await page.locator('#country').selectOption('India');
    //4)await page.locator('#country').selectOption({index:1});
    //5)await page.selectOption('#country','India');

    //Assertions
    //1)check the number of options in dropdown
    //const options=await page.locator('#country option')
    //await expect(options).toHaveCount(10);

    //2)check the number of options in dropdown
   // const options=await page.$$('#country option')
    //console.log(options.length);
    //await expect(options.length).toBe(10);

    //check the presence of value in the dropdown -approcah1
    //const content=await page.locator('#country').textContent();
    //await expect(content.includes('India')).toBeTruthy();

   /* //check the presence of value in the dropdown -approcah2
    const options=await page.$$('#country option')
    var status=false;
    for(const option of options)
    {
        //console.log(await option.textContent());
        var value= await option.textContent();
        if(value.includes('India'))
        {
            status=true;
            break;
        }
    }

    await expect(status).toBeTruthy();
    */

    //check the value from the dropdown
    const options=await page.$$('#country option')
    for(const option of options)
    {
        //console.log(await option.textContent());
        let value= await option.textContent();
        if(value.includes('France'))
        {
            const optionValue = await option.getAttribute('value');
            await page.selectOption("#country", optionValue);
            break;
        }
    }

    await page.waitForTimeout(5000);

})