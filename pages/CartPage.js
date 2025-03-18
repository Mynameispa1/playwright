exports.CartPage=

class CartPage{

    constructor(page){

        this.page=page;
        this.noOfProducts="//tbody//tr//td[2]";
    }

    async checkProductInCart(productName)
    {
        const products=await this.page.$$(this.noOfProducts);
        for(const product of products)
        {
            if(productName == await product.textContent())
            {
                return true;
                break;
            }
        }
    }
}