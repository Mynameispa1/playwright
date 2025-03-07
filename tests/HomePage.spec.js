var { test, expect} = require('@playwright/test');

test('Home Page', async({page})=>{

   await page.goto('https://www.demoblaze.com/');

  const pageTitle= await page.title();
  console.log('The title of the page is: ',pageTitle);

  await expect(page).toHaveTitle('STORE');

  var pageUrl=page.url();
  console.log('The Url of the of the page is: ',pageUrl)

  await expect(page).toHaveURL('https://www.demoblaze.com/');

  await page.close();

})