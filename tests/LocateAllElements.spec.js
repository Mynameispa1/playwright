const { test, expect}= require('@playwright/test');
const { captureRejectionSymbol } = require('events');

test('LocateAllElement', async({page})=>{

    await page.goto("https://www.demoblaze.com/");

    //await page.waitForSelector("a");  //same like wait method
    /*const links=await page.$$('a');

    for(const link of links)
    {
        const linktext=await link.textContent();

        console.log(linktext);
    }
        */

    await page.waitForSelector('//div[@id="tbodyid"]//div//h4//a');
    const products=await page.$$('//div[@id="tbodyid"]//div//h4//a');

    for(const product of products)
    {
        const productName=await product.textContent();
        console.log(productName);
    }
})