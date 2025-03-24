import { test, expect } from '@playwright/test';

const usernames=['pavan1992','kumar1992','muvva1992'];
for(let username of usernames)
{

    test(`test login ${username}`, async ({ page }) => {
        await page.goto('https://www.demoblaze.com/');
        await page.getByRole('link', { name: 'Log in' }).click();
       
        await page.locator('#loginusername').fill(username);
       
        await page.locator('#loginpassword').fill('test@123');
        await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();
        await console.log('testing...')
        await page.getByRole('button', { name: 'Log in' }).click();
        await page.getByRole('link', { name: 'Log out' }).click();
      });
}
