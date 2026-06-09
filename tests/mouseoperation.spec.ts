//click()
//right click()
//double click()
//left click()
//mouse move()
//mouse down()
//mouse up()
//drag and drop()
//scrolling
//scroll into view()
//scroll by pixel
//scroll to end of page
//scroll to top of page 
//https://demo.guru99.com/test/simple_context_menu.html 
import { test, expect } from '@playwright/test';

test("handling right click and double click", async ({ page }) => {
await page.goto("https://demo.guru99.com/test/simple_context_menu.html")

await page.getByText("Double-Click Me To See Alert", {exact: true}).dblclick();
await page.getByText("right click me", {exact: true}).click({button:"right"});
await page.waitForTimeout(2000);
await page.getByText("Paste", {exact: true}).click();
await page.waitForTimeout(2000);

await page.goto("https://testautomationpractice.blogspot.com/")
await page.getByText("Copy Text", {exact: true}).dblclick();
await expect(page.locator("#field2")).toHaveValue("Copy Text");
})

test("Mouse hover and scroll", async ({ page }) => {
await page.goto("https://spicejet.com/ ")
await page.getByText("Travel Policies").hover();
await page.waitForTimeout(2000);
await expect(page.getByTestId("Baggage Information")).toBeVisible();
await page.getByText("Baggage Information").click();
await page.waitForTimeout(2000);

})

test("Scroll operation", async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/")
await page.getByRole('link', { name: 'Download Files' }).click()

})


//Drag and Drop operation
test("Drag and Drop operation", async ({ page }) => {
//await page.goto("https://demoqa.com/droppable")
await page.goto("https://testautomationpractice.blogspot.com/")
//drag and drop- locator.dragto(locator)
await page.locator("#draggable").dragTo(page.locator("#droppable"))

})