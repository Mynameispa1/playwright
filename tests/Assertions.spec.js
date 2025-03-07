//const { test, expect}=require('@playwright/test');
import {test, expect} from '@playwright/test';
import exp from 'constants';

test('Assertions-validation',async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F');

    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    const logoElement =await page.locator('//img[@alt="nopCommerce demo store"]');

    await expect(logoElement).toBeVisible();

    const searchElement =await page.locator('//input[@id="small-searchterms"]');

    await expect(searchElement).toBeEnabled();

    const maleRadioButton=await page.locator('//input[@id="gender-male"]');
    await maleRadioButton.click();
    await expect(maleRadioButton).toBeChecked();

    const newslettercheckbox=await page.locator('//input[@id="Newsletter"]');
    await expect(newslettercheckbox).toBeChecked();

    const regsiterButton=await page.locator('//button[@id="register-button"]');
    await expect(regsiterButton).toHaveAttribute('type','submit');

    const registerTest=await page.locator('//h1[normalize-space()="Register"]');
    await expect(registerTest).toHaveText('Register');

    await expect(registerTest).toContainText('gis');


    const firstName=await page.locator('//input[@id="FirstName"]');

    await firstName.fill('Pavan Kumar Muvva');

    await expect(firstName).toHaveValue('Pavan Kumar Muvva');


    const linkcount=await page.locator('//link');
    await expect(linkcount).toHaveCount(8);





})