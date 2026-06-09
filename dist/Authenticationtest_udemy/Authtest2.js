import { test } from '@playwright/test';
test('test', async ({ page }) => {
    await page.goto('https://bitheap.tech/');
    await page.locator('#menu-item-2330').getByText('Login').click();
    await page.getByRole('textbox', { name: 'Username / Email' }).click();
    await page.getByRole('textbox', { name: 'Username / Email' }).fill('laurentiu@thirdtest.com');
    await page.getByRole('textbox', { name: 'Username / Email' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('Playwright@123');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.locator('#menu-item-1310').getByRole('link', { name: 'Shop' }).click();
    await page.getByRole('link', { name: 'Page 2' }).click();
    await page.getByRole('link', { name: 'Add to cart: “Demo Item for' }).click();
    await page.getByRole('link', { name: '' }).click();
    await page.getByRole('link', { name: 'Proceed to checkout' }).click();
    await page.getByRole('checkbox', { name: 'I would like to receive' }).check();
    await page.getByRole('button', { name: 'Reject All' }).click();
    await page.getByRole('button', { name: 'Place order' }).click();
});
