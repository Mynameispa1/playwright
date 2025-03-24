import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto(process.env.URL);
  await page.getByRole('link', { name: 'Log in' }).click();
 
  await page.locator('#loginusername').fill(process.env.USER);
 
  await page.locator('#loginpassword').fill(process.env.PASSWORD);
  await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();
  await console.log('testing...')
  
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});