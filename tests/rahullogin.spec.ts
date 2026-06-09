import { test, expect } from '@playwright/test';

test("Login test", async ({ page }) => {
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await page.locator("#username").fill("rahulshettyacademy");
await page.locator("#password").fill("learning");
await page.locator("#terms").check();
//select student from dropdown
await page.locator("select.form-control").selectOption("stud");
await page.getByRole('checkbox', { name: "I Agree to the terms and conditions" }).check();
await page.locator("#signInBtn").click();


})


