import { test, expect } from '@playwright/test';

test('Bitheap login', async ({ page }) => {
  await page.goto('https://bitheap.tech/');

  // If there is a login button/link on the homepage
  await page.getByRole('link', { name: /login/i }).click().catch(async () => {
    await page.getByRole('button', { name: /login/i }).click();
  });

  // Update selectors below to match the actual login form
  await page.locator('input[type="email"], input[name="email"], input[placeholder*="email" i]')
    .first()
    .fill(process.env.BITHEAP_EMAIL || 'laurentiu@thirdtest.com');

  await page.locator('input[type="password"], input[name="password"], input[placeholder*="password" i]')
    .first()
    .fill(process.env.BITHEAP_PASSWORD || 'Playwright@123');
})
