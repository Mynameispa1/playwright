import {test,expect} from '@playwright/test'
import exp from 'constants';

test('Inbuild-Reporters-1',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await expect(page).toHaveTitle('OrangeHRM')
})

test('test2',async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')
    await expect(page).toHaveTitle('STORE')
})

test('test3',async({page})=>{

    await page.goto('https://demo.nopcommerce.com/')
    await expect(page).toHaveTitle('nopCommerce demo store. Home page title')
})

