import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import {HomePage} from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';
import exp from 'constants';

    test('test', async ({ page }) => {

        //Login
        const login=new LoginPage(page);
        await login.gotoLoginPage();
        await login.login('pavan1992','test@123')
        await page.waitForTimeout(3000)
    

   //Home
   const home=new HomePage(page)
   await home.addProductToCart("Nexus 6")
   await page.waitForTimeout(3000)
   await home.gotoCart();

   //Cart Page
   const cart=new CartPage(page);
   await page.waitForTimeout(3000);
   const status=await cart.checkProductInCart('Nexus 6');
   await expect(await status).toBe(true);

   
})