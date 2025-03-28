/*

import { test, expect } from '@playwright/test';
const json=JSON.parse(JSON.stringify(require('../../test-data/datadriven.json')));


//If you login with one testData then we can go as below
test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
 
  await page.locator('#loginusername').fill(json.username);
 
  await page.locator('#loginpassword').fill(json.password);
  await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();
  
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();

  await page.pause();
});

*/

//login multiple testData

import { test, expect } from '@playwright/test';
const jsondata=JSON.parse(JSON.stringify(require('../../test-data/datadrivenwithmultipletestData.json')));


test.describe('Login with multiple Data',()=>{

    for(let json of jsondata)
    {
        test(`Login To Application ${json.id}`, async ({ page }) => {
            await page.goto(process.env.URL);
            await page.getByRole('link', { name: 'Log in' }).click();
           
            await page.locator('#loginusername').fill(json.username);
           
            await page.locator('#loginpassword').fill(json.password);
            await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();
            
            await page.getByRole('button', { name: 'Log in' }).click();
            await page.getByRole('link', { name: 'Log out' }).click();
          
          });
    }


});


