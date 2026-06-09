
import { test, expect } from '@playwright/test';

test('file upload test', async ({ page }) => {
  
     await page.goto('https://cgi-lib.berkeley.edu/ex/fup.html');
     //const filePath = 'C:/Users/laurentiu/Desktop/Playwright/Typescript/Practice.fileupload.spec.ts';
     const filePath = 'C:/Users/laurentiu/Desktop/Playwright/Typescript/Practice.fileupload.spec.ts';

     await page.setInputFiles('input[name="upfile"]', filePath);
        await page.click('input[type="submit"]');
        await expect(page.locator('body')).toContainText('File size is 0 bytes');
        await expect(page.locator('body'))
      .toContainText('Practice.fileupload.spec.ts');

});


