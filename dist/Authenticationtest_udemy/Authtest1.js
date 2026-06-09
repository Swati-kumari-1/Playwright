import { chromium } from 'playwright';
// 1. Define the automation configuration and credentials
const CONFIG = {
    url: 'https://bitheap.tech', // Replace with the exact practice login URL if different
    username: 'your_username',
    password: 'your_password',
    targetItem: 'Demo Item for Automation Practice Course'
};
async function runAutomation() {
    // Launch the browser instance (headless: false lets you watch it run)
    const browser = await chromium.launch({ headless: false, slowMo: 500 });
    const context = await browser.newContext();
    const page = await context.newPage();
    try {
        console.log('🚀 Starting automation script...');
        // 1. Navigate to the website
        await page.goto(CONFIG.url);
        console.log(`Navigated to ${CONFIG.url}`);
        // 2. Perform Login Flow
        // Note: Update these selectors to match the exact elements on bitheap.tech
        await page.fill('input[name="username"]', CONFIG.username);
        await page.fill('input[name="password"]', CONFIG.password);
        await page.click('button[type="submit"]');
        console.log('🔑 Login form submitted.');
        // 3. Locate and Add the specific item to the cart
        // Using a text-based locator to safely find the specific course element
        const itemLocator = page.locator(`text=${CONFIG.targetItem}`);
        await itemLocator.waitFor({ state: 'visible', timeout: 5000 });
        // Find the corresponding "Add to Cart" button relative to the item container
        // This assumes the button is inside the same card/container block
        const addToCartButton = page.locator(`.product-card:has-text("${CONFIG.targetItem}") button.add-to-cart`);
        await addToCartButton.click();
        console.log(`🛒 Added item to cart: "${CONFIG.targetItem}"`);
        // 4. Navigate to Cart / Checkout View
        await page.click('.shopping-cart-icon');
        // 5. Click Proceed to Checkout
        const checkoutButton = page.locator('button:has-text("Proceed to Checkout")');
        await checkoutButton.click();
        console.log('💳 Proceeded to checkout screen.');
        // 6. Complete the Order Placement
        const placeOrderButton = page.locator('button:has-text("Place Order")');
        await placeOrderButton.click();
        console.log('📦 Clicked Place Order.');
        // 7. Verify Order Success
        const successIndicator = page.locator('.order-success-message, h1:has-text("Thank you")');
        await successIndicator.waitFor({ state: 'visible', timeout: 7000 });
        const successText = await successIndicator.innerText();
        console.log(`✨ Success confirmation verified! Received: "${successText.trim()}"`);
    }
    catch (error) {
        console.error('❌ Automation script failed during execution:', error);
    }
    finally {
        // Keep browser open for a few seconds before closing up the session
        await page.waitForTimeout(3000);
        await browser.close();
        console.log('🏁 Browser closed. Script complete.');
    }
}
// Execute the function
runAutomation();
