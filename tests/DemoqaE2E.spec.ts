import { test, expect } from '@playwright/test';

test('fill text box form on demoqa', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  await page.locator('#userName').fill('Test');
  await page.locator('#userEmail').fill('Test@gmail.com');
  await page.locator('#currentAddress').fill('301,ABCD,87654');
  await page.locator('#permanentAddress').fill('301,ABCD,87654');
  await page.locator('#submit').click();

  await expect(page.locator('#output')).toContainText('Test');
  await expect(page.locator('#output')).toContainText('Test@gmail.com');
});

test('checks Home checkbox on demoqa', async ({ page }) => {
  await page.goto('https://demoqa.com/checkbox');

  const homeCheckbox = page.getByRole('checkbox', { name: /home/i });
  await homeCheckbox.check();
  await expect(homeCheckbox).toBeChecked();
  await expect(page.locator('#result')).toContainText('home');
});

test('Handling Radio Box', async({page})=>{
 await page.goto("https://demoqa.com/radio-button")    
 await page.locator('.mb-3').getByText("Do you like the site")
 
})