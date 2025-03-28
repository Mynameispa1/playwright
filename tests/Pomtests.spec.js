import {test,expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {HomePage} from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test('test',async({page})=>{

    const login=new LoginPage(page);
    await login.gotoLoginPage();

    await login.login('pavan1992','test@123')
    //await page.waitForTimeout(3000);
    await login.validation();

    

    const home=new HomePage(page);
    await home.addProductToCart('Nexus 6');
    await home.gotoCart();

     //Cart
  const cart=new CartPage(page)
  await page.waitForTimeout(3000)
  const status=await cart.checkProductInCart('Nexus 6')
  expect(status).toBe(true);

  await login.logout();

})