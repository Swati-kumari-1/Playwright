
import { test, expect } from '@playwright/test';

//frames- helping us in intergrating one htlm page into another
//used in iframe tag

/*
<html>- goto https://demo.automationtesting.in/Frames.html

<iframe>-const framepage=page.framelocator()

  <html>
   .................
    <html>

  <iframe>  
<html>

*/
test.only("Handling Frames", async({page})=>{
page.goto("https://demo.automationtesting.in/Frames.html")
await page.waitForTimeout(3000)
//frame locator helps in entering into iframe
//const framepage=page.frameLocator('#singleframe')
//await page.frameLocator('#singleframe').locator('input[type="text"]').fill("Testing")
//await expect(page.frameLocator('#singleframe').locator('input[type="text"]')).toHaveText("Testing")

await page.goto('https://demo.automationtesting.in/Frames.html');

await page.locator('a[href="#Multiple"]').click();

const input = page
  .frameLocator('iframe[src="MultipleFrames.html"]')
  .frameLocator('iframe[src="SingleFrame.html"]')
  .locator('input[type="text"]');

await page.waitForTimeout(2000)  
await input.fill('Testing');

})

