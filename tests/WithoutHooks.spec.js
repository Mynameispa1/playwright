const {test, expect } = require("@playwright/test");

test('HomePageTest',async({page})=>{

    await page.goto('https://www.demoblaze.com/');

    //Login
    await page.click('#login2');

    await page.fill('#loginusername','pavan1992');
    await page.fill('#loginpassword','test@123');

    await page.locator("//button[normalize-space()='Log in']").click();

    //HomePage

    const allprodcuts=await page.$$('.hrefch');
    //console.log('Total Number of Products are: ', allprodcuts.length)

    await expect(allprodcuts.length).toBe(9);
    await expect(allprodcuts).toHaveLength(9);

    //logout
    await page.locator('#logout2').click();

    
})


test.only('Add Product to cart',async({page})=>{

    await page.goto('https://www.demoblaze.com/');

    //Login
    await page.click('#login2');

    await page.fill('#loginusername','pavan1992');
    await page.fill('#loginpassword','test@123');

    await page.locator("//button[normalize-space()='Log in']").click();

    //Add Prodcut to the cart

    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();

    page.on('dialog', async dialog =>{

        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    })
   
    //logout
    await page.locator('#logout2').click();

    await page.waitForTimeout(5000);

})