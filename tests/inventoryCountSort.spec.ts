import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';
import { loginFunc } from './utils';

test.beforeEach(async ({ page }) => {
    await loginFunc(page);
  });

test ('Item count on inventory page', async ({ page }) => {
  const pm = new PageManager(page); 
  //check item count on inventory page is 6 
  await expect(pm.onInventoryPage().inventoryItem).toHaveCount(6);
}
)

test ('Sort inventory by price - high to low', async ({ page }) => {
  const pm = new PageManager(page); 
  const allPrices = await pm.onInventoryPage().priceHighToLow(); 
  const sortedPrices = allPrices.sort((a, b) => b - a);
  expect(allPrices).toEqual(sortedPrices);
})

test ('Sort inventory by name - Z to A', async ({ page }) => {
  const pm = new PageManager(page); 
  const allNames = await pm.onInventoryPage().nameZtoA(); 
  const sortedNames = allNames.sort((a, b) => b.localeCompare(a)); 
  expect(allNames).toEqual(sortedNames);
})