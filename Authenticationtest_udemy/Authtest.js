import { chromium } from 'playwright';
(async () => {
    // =========================
    // LAUNCH BROWSER
    // =========================
    const browser = await chromium.launch({
        headless: false,
        slowMo: 500
    });
    const context = await browser.newContext({
        storageState: undefined
    });
    await context.clearCookies();
    const page = await context.newPage();
    // =========================
    // CLEAR CART
    // =========================
    await page.goto('https://bitheap.tech/shop/?empty-cart');
    await page.waitForLoadState('networkidle');
    console.log('✅ Cart cleared');
    // =========================
    // LOGIN
    // =========================
    await page.goto('https://bitheap.tech/');
    await page.click('#menu-item-2330');
    await page.waitForSelector('input[name="xoo-el-username"]');
    await page.fill('input[name="xoo-el-username"]', 'laurentiu@thirdtest.com');
    await page.fill('input[name="xoo-el-password"]', 'Playwright@123');
    await page.click('.xoo-el-login-btn');
    await page.waitForLoadState('networkidle');
    console.log('✅ Login successful');
    // =========================
    // OPEN SHOP
    // =========================
    await page.goto('https://bitheap.tech/shop/');
    await page.waitForLoadState('networkidle');
    // Open page 2
    await page.locator('.page-numbers').getByText('2').click();
    await page.waitForLoadState('networkidle');
    // =========================
    // ADD PRODUCT
    // =========================
    const productCard = page.locator('li.product').filter({
        hasText: 'Demo Item for Automation Practice Course'
    });
    await productCard.waitFor({
        state: 'visible',
        timeout: 15000
    });
    // Add to cart button
    const addBtn = productCard.locator('a.add_to_cart_button');
    await addBtn.scrollIntoViewIfNeeded();
    await addBtn.click();
    console.log('🛒 Clicked Add To Cart');
    // Wait for WooCommerce update
    await page.waitForTimeout(5000);
    // =========================
    // GO TO CART PAGE
    // =========================
    await page.goto('https://bitheap.tech/cart/');
    await page.waitForLoadState('networkidle');
    // Debug
    console.log(await page.content());
    // =========================
    // VERIFY PRODUCT
    // =========================
    const cartText = await page.locator('body').textContent();
    if (cartText?.includes('Demo Item for Automation')) {
        console.log('✅ Product successfully added to cart');
    }
    else {
        console.log('❌ Product NOT found in cart');
        await page.screenshot({
            path: 'cart-error.png',
            fullPage: true
        });
        await browser.close();
        return;
    }
    // =========================
    // PROCEED TO CHECKOUT
    // =========================
    const checkoutBtn = page.getByRole('link', {
        name: /Proceed to checkout/i
    });
    await checkoutBtn.waitFor({
        state: 'visible',
        timeout: 15000
    });
    await checkoutBtn.click();
    // =========================
    // VERIFY CHECKOUT PAGE
    // =========================
    await page.waitForSelector('#billing_first_name');
    console.log('🎉 Successfully reached checkout page');
    await page.waitForTimeout(5000);
    await browser.close();
})();
