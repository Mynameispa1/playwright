import { test, expect } from "@playwright/test";
import { enableCompileCache } from "module";

test.skip('Alert',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling Dilaog window handler
    page.on('dialog', async dialog =>{

        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();
    })

    await page.waitForTimeout(5000);
    await page.locator("//button[@id='alertBtn']").click();

    
})

test.skip('confirmation-Dialog-Alert',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    //Enabling Dilaog window handler
    page.on('dialog', async dialog =>{

        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept();
    })

    
    await page.locator("//button[@id='confirmBtn']").click();
    const text=await page.locator("//p[@id='demo']");

    await expect(text).toHaveText('You pressed OK!');

    await page.waitForTimeout(5000);
    
})

test('Promt-Dialog-Alert',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    //Enabling Dilaog window handler
    page.on('dialog', async dialog =>{

        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('Jhon');
    })

    
    await page.locator("//button[@id='promptBtn']").click();
    const text=await page.locator("//p[@id='demo']");

    await expect(text).toHaveText('Hello Jhon! How are you today?');

    await page.waitForTimeout(5000);
    
})