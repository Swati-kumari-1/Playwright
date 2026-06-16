import { test, expect } from '@playwright/test';
test('Screenshot scenario', async ({ page }) =>{

  await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
  await page.screenshot({path: "screenshot/page.png"})

})
test.only('Screenshot scenario1', async ({ page }) =>{

  await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
  await page.locator("#userEmail").screenshot({path: "screenshot/Emailid.png"})
  await page.screenshot({path:  "screenshot/page.png", fullPage:true})

})

