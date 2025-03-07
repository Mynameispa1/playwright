import {test, expect } from "@playwright/test";

test('boostartp',async({page})=>{

    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');

    await page.locator('.multiselect').click();  //click on the dropdown

    //check the number of options in s dropdown Approach-1
    //const options=await page.locator('//li//a//label//input');
    //await expect(options).toHaveCount(11);

    //check the number of options in s dropdown Approach-2
    //const options=await page.$$('//li//a//label//input');
    //await expect(options.length).toBe(11);

    //select options from dropdown
    const options=await page.$$('//li//a//label');
    for(const option of options)
    {
        const value=await option.textContent();
        //await console.log('value is: ',value);
        if(value.includes('Java') || value.includes('Oracle'))
        {
            await option.click();
        }
    }

    await page.waitForTimeout(5000);
})