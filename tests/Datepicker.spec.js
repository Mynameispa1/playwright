import { test, expect } from "@playwright/test";
import { availableParallelism } from "os";

test('Datepicker',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Direct selcting Date
    //await page.fill('#datepicker','03/20/2025');
    
    
   /* //Future Date
    const year='2026';
    const month='April';
    const date='17';

    await page.click('#datepicker');

    while(true)
    {
        const currentyear=await page.locator('.ui-datepicker-year').textContent();
        const currentmonth=await page.locator('.ui-datepicker-month').textContent();

        if(currentyear==year && currentmonth==month)
        {
            break;
        }

        await page.locator("//a[@title='Next']").click();

        await page.waitForTimeout(100);
       
    }

    //select Date
    const allDates=await page.$$("//table[@class='ui-datepicker-calendar']//tr//td//a");
    //console.log('TOtal number of Dates are: ',allDates.length);

    for(let dates of allDates)
    {
        if(await dates.textContent == date)
        {
            await dates.click();
            break;
        }
    }

    await page.waitForTimeout(5000);
    */

    //Past Date
    const year='2023';
    const month='February';
    const date='24';

    await page.click("//input[@id='datepicker']");

    while(true)
    {
        const currentYear=await page.locator('.ui-datepicker-year');
        const currentMonth=await page.locator('.ui-datepicker-month');

        if(await currentYear.textContent()==year && await currentMonth.textContent()==month)
        {

            break;
        }

        await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-w']").click();

        
        
    }

    //Select Date
    const allDates=await page.$$("//table[@class='ui-datepicker-calendar']//tbody//tr//a");

    for(let dates of allDates)
    {
        if(await dates.textContent()==date)
        {
            await dates.click();
        }
    }

    await page.waitForTimeout(1000);

})