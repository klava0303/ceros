import { Locator, Page } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
	readonly title: Locator;
    readonly addToCartButton: Locator; 
    readonly productName: Locator; 
    readonly productPrice: Locator; 
    readonly cart: Locator; 
    readonly removeButton: Locator; 
    readonly inventoryItem: Locator; 

    constructor(page: Page) {
		this.page = page;
        this.title = page.locator('[data-test="title"]')
        this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.productName = page.locator('[data-test="item-4-title-link"]')
        this.productPrice = page.locator('#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.pricebar > div')
        this.cart = page.locator('[data-test="shopping-cart-link"]')
        this.removeButton = page.locator('[data-test="remove-sauce-labs-backpack"]')
        this.inventoryItem = page.locator('.inventory_item')
    }

	async addToCart() {
		await this.addToCartButton.click();
	}

    async priceHighToLow() {
        await this.page.selectOption('.product_sort_container', 'hilo'); 
        const allPrices = await this.page.locator('.inventory_item_price').allTextContents();
        return allPrices.map(price => parseFloat(price.replace('$', '')));
    }

    async nameZtoA()
    {
        await this.page.selectOption('.product_sort_container', 'za'); 
        const allNames = await this.page.locator('.inventory_item_name').allTextContents();
        return allNames;
    }
}