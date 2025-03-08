import {test, expect } from "@playwright/test";

test('hanlde-frame',async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');

    //Get all Frames
    const allFrames=await page.frames();

    console.log('The number of Frames are: ',allFrames.length);

    const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await frame1.locator("input[name='mytext1']").fill('Jhon');

    await page.waitForTimeout(5000);

})