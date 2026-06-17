import { test, expect } from '@playwright/test';

let productstoAdd = ["iphone 13 pro", "ZARA COAT 3"];
test('E2E Automation scenario', async ({ page }) => {
await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
await page.locator("#userEmail").fill("swatimca11@gmail.com")
await page.locator("#userPassword").fill("Hiku@5678")
await page.locator("#login").click()
await expect(page.locator(".fa-sign-out")).toBeVisible()

//find the number of products are displaying on page

const products= page.locator("div.card-body") //3

await products.nth(0).waitFor()
const countofproducts= await products.count()  //3, [0,1,2]
 //Add product dynamically
//filter()- filter out the value depending upon the criteria

for (const productName of productstoAdd) {
    const product = products.filter({
        has: page.locator('b', { hasText: productName })
    });
    await page.waitForTimeout(2000)
    // click Add To Cart button for the matched product
    await product.locator('button').last().click();
}

// Open the cart
await page.locator("[routerlink*='cart']").click();

// Verify products in the cart
for (const productName of productstoAdd) {
    await expect(
        page.locator('h3').filter({ hasText: productName })
    ).toBeVisible();
}

//await page.locator(".btn-primary").click()
await page.getByText("Checkout").click();
//await page.locator(".user__name input").fill("swatimca11@gmail.com");
await page.locator("[placeholder='Select Country']").pressSequentially("Ind");
const dropdown = page.locator(".ta-results");

await dropdown.waitFor();

await page.locator("button").filter({
    hasText: "India"
}).nth(1).click();
await page.locator(".action__submit").click()

await expect(
    page.locator(".hero-primary")
).toContainText("Thankyou for the order.");

//const orderID = await page.locator(".em-spacer-1, .ng-star-inserted").textContent();
const orderID = await page.locator("label.ng-star-inserted").last().textContent();

console.log("Order ID :", orderID);

});



