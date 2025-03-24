const { test,expect } = require("@playwright/test");

//page screenshot
test('page screenshot',async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');

    await page.screenshot({path:'tests\\screenshot\\'+Date.now()+'page-screenshot.png'});
});

//Full page screenshot
test('Full screenshot',async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');

    await page.waitForTimeout(2000);
    await page.screenshot({path:'tests\\screenshot\\'+Date.now()+'fullpage-screenshot.png',fullPage:true});
});

//Perticular area
test('Specific area screenshot',async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');

    await page.waitForTimeout(2000);
    await page.locator("//body/div[@id='contcont']/div[@class='row']/div[@class='col-lg-9']/div[@id='tbodyid']/div[1]").screenshot({path:'tests\\screenshot\\'+Date.now()+'perticulararea-screenshot.png'});
});

//Perticular area
test.only('Specific area screenshot2',async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');

    await page.waitForTimeout(2000);
    await page.locator(".navbar-brand").screenshot({path:'tests\\screenshot\\'+Date.now()+'perticulararea2-screenshot.png'});
});