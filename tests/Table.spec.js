import {test, expect } from "@playwright/test";

test('Table',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    /*
    const table=await page.locator('#productTable');
    const columns=await table.locator('thead tr th');
    console.log('Number of Columns is: ',await columns.count());
    */

    //Total number of Columns
    const columns=await page.locator("//table[@id='productTable']//thead//tr//th");
    console.log('The number of Columns are: ',await columns.count());
    await expect(await columns.count()).toBe(4);

    //Total number of rows
    const rows=await page.locator("//table[@id='productTable']//tbody//tr");
    console.log('The number of Rows are:',await rows.count());
    await expect(await rows.count()).toBe(5);

    //select checkbox for Laptop
   const matchedRow= rows.filter({
        has: page.locator('td'),
        hasText: 'Laptop'
    })

    await matchedRow.locator("input").check();

    //select multiple products by re-usable function
    await selectProduct(rows,page,'Smartphone')
    await selectProduct(rows,page,'Smartwatch')
    await selectProduct(rows,page,'Tablet')

    await page.waitForTimeout(5000);


})

//We have created re-usable function and we can call it multiple times
async function selectProduct(rows,page,name)
{
    const matchedRow= rows.filter({
        has: page.locator('td'),
        hasText: name
    })

    await matchedRow.locator("input").check();
}