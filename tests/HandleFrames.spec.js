import {test, expect } from "@playwright/test";

test('hanlde-frame',async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');

    //Get all Frames
    const allFrames=await page.frames();

    console.log('The number of Frames are: ',allFrames.length);

    //APproach-1: Using Name or Url
    //const frame1=await page.frame('name');  If Name is avilable we can pass directly name
    //const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    //await frame1.locator("input[name='mytext1']").fill('Jhon');

    //Approcah-2: Using frame locator
    const frame1=await page.frameLocator("frame[src='frame_1.html']").locator("//input[@name='mytext1']");
    await frame1.fill('Kanedy');

    await page.waitForTimeout(5000);

})