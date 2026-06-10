import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('Handling File Upload', async ({ page }) => {

  await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

  const filePath1 = path.join(__dirname, '../testdata/Img1.png');
  const filePath2 = path.join(__dirname, '../testdata/Img2.png');
  await page.waitForTimeout(2000)

  await page.locator('#filesToUpload').setInputFiles([
    filePath1,
    filePath2
  ]);

  await expect(page.locator('#fileList li').nth(0))
    .toHaveText('Img1.png');

  await expect(page.locator('#fileList li').nth(1))
    .toHaveText('Img2.png');
});