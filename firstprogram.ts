import { chromium } from 'playwright';

(async () => {
  console.log("Hello, TypeScript!");

  const browser = await chromium.launch({
    headless: false
  });

  const page = await browser.newPage();
  await page.goto("https://rahulshettyacademy.com/learning-paths");
  await page.screenshot({ path:"D:\\PlaywrightTutorialApril\\screenshot.png" });
   await browser.close();
})();