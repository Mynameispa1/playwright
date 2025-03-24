/*
// ############# beforeEach and afterEach Hooks ####################
import {test, expect} from '@playwright/test'
import { TIMEOUT } from 'dns';

let page;
test.beforeEach('beforeEach',async({browser})=>{

    page=await browser.newPage();
    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
    console.log('beforeEach------')

        await page.locator('#input-email').fill('pavan123@gmail.com');
        await page.fill('#input-password','test@123');
        await page.click("//input[@value='Login']");
    
});

test.afterEach('afterEach',async()=>{

    console.log('afterEach------')
    await page.click("//span[normalize-space()='My Account']");
    await page.click("//ul[@class='dropdown-menu dropdown-menu-right']//a[normalize-space()='Logout']");
    await page.click("//a[normalize-space()='Continue']");
});

test('Login into the application',async()=>{

        console.log('test1------')
        expect(page).toHaveTitle('My Account');
        
        
});


test('Add to cart',async()=>{
    
    console.log('test2------')
    await page.click("//a[normalize-space()='Desktops']");
    await page.click("//a[normalize-space()='Mac (1)']");
    await page.click("//span[normalize-space()='Add to Cart']");
    await page.waitForSelector("//div[@class='alert alert-success alert-dismissible']");

    const notification=await page.locator("//div[@class='alert alert-success alert-dismissible']");
    expect(notification).toBeVisible();
    expect(notification).toContainText("Success: You have added iMac to your shopping cart!");
    
});

*/

/*
//################### beforeAll and afterAll #####################

import {test, expect} from '@playwright/test'

let page;
test.beforeAll('beforeAll',async({browser})=>{

    page=await browser.newPage();
    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
    console.log('beforeAll------')

        await page.locator('#input-email').fill('pavan123@gmail.com');
        await page.fill('#input-password','test@123');
        await page.click("//input[@value='Login']");
    
});

test.afterAll('afterAll',async()=>{

    console.log('afterAll------')
    await page.click("//span[normalize-space()='My Account']");
    await page.click("//ul[@class='dropdown-menu dropdown-menu-right']//a[normalize-space()='Logout']");
    await page.click("//a[normalize-space()='Continue']");
});

test('Login into the application',async()=>{

    console.log('test1------')
        expect(page).toHaveTitle('My Account');
        
});


test('Add to cart',async()=>{
    
    console.log('test2------')
    await page.click("//a[normalize-space()='Desktops']");
    await page.click("//a[normalize-space()='Mac (1)']");
    await page.click("//span[normalize-space()='Add to Cart']");
    await page.waitForSelector("//div[@class='alert alert-success alert-dismissible']");

    const notification=await page.locator("//div[@class='alert alert-success alert-dismissible']");
    expect(notification).toBeVisible();
    expect(notification).toContainText("Success: You have added iMac to your shopping cart!");
});

*/

/*
import {test, expect} from '@playwright/test'


test('dropanddown',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //const country=await page.locator("#country").selectOption('Japan')
   // const country=await page.locator('#country').selectOption({value:'india'});
   //const country=await page.locator('#country').selectOption({index:2});

   //const country= await page.locator('#country').selectOption({label:'Australia'});

    //await page.waitForTimeout(5000);

    //expect(country).toBeTruthy();

    //select one value from drop and drop
    const alloptions=await page.$$("#country option"); 
    for(let option of alloptions)
    {
            let value=await option.textContent();
            await console.log("values are: ",value)
            if(value.includes('India'))
            {
               const optionValue=await option.getAttribute('value');
               await page.selectOption('#country',optionValue);
              break;
            }
    }
    
    await page.waitForTimeout(3000);
});
*/
import {test, expect} from '@playwright/test';
import { execPath } from 'process';

test('HandleFrames',async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');
    const allframes=page.frames().length;

    await console.log('The numbers of Frames in this page are: ',allframes);
    expect(allframes).toBeTruthy();
    expect(7).toBe(7);
    

});

