import { test, expect } from "@playwright/test";
import exp from "constants";

test('single file uploader',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    await page.waitForSelector('#singleFileInput');
    //await page.locator('#singleFileInput').click();
    await page.locator('#singleFileInput').setInputFiles('tests\\Fileupload\\test1.pdf');  //setInputFiles() Method

    await page.locator("//button[normalize-space()='Upload Single File']").click();
    await expect(page.locator('#singleFileStatus')).toHaveText('Single file selected: test1.pdf, Size: 39 bytes, Type: application/pdf')

    await page.waitForTimeout(1000);
    
})

//multiple files
test.only('multiple file uploader',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    await page.waitForSelector('#multipleFilesInput');
    //await page.locator('#multipleFilesInput').click();
    await page.locator('#multipleFilesInput').setInputFiles(['tests\\Fileupload\\test1.pdf','tests\\Fileupload\\test2.pdf']);

    await page.locator("//button[normalize-space()='Upload Multiple Files']").click();
    await expect(await page.locator('#multipleFilesStatus')).toHaveText('Multiple files selected: test1.pdf, Size: 39 bytes, Type: application/pdf test2.pdf, Size: 46 bytes, Type: application/pdf')
    
    await page.waitForTimeout(5000);

    // //romoving the attached files
    // await page.locator('#multipleFilesInput').setInputFiles([]);
    // await page.waitForTimeout(5000);

    // await expect(await page.locator("//p[@id='multipleFilesStatus']")).toHaveText('No files selected.');
    // await page.waitForTimeout(5000);

    
})