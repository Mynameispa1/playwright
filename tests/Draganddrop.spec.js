import { test,expect } from "@playwright/test";

test('DragandDrop',async({page})=>{

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    const copenhagon=await page.locator("//div[@id='box4']");
    const sweden=await page.locator("//div[@id='box102']");

    await copenhagon.dragTo(sweden);  //dragTo()
    

    await page.waitForTimeout(3000)


})