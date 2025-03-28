import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
 
  await page.locator('#loginusername').fill('pavan1992');
 
  await page.locator('#loginpassword').fill('test@123');
  await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();
  await console.log('testing...')
  
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});