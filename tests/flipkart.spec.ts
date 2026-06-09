import { test, expect } from '@playwright/test';

test.describe('Flipkart Footer Link Verification', () => {
    
    test('should locate and verify all elements under the ABOUT section', async ({ page }) => {
        // 1. Navigate to Flipkart
        await page.goto('https://www.flipkart.com/');
        //wait for the page to load completely
        await page.waitForLoadState('networkidle');
        //cancel the login popup if it appears
        const loginPopup = page.locator('div._2QfC02');

        // 2. Locate the specific 'ABOUT' block inside the footer elements only
        // This targets the block that contains the text "ABOUT" and grabs the anchor links inside it.
         const aboutLinks=page
         .locator('footer, div[class*="footer"]')
            .filter({ has: page.locator('text=/^ABOUT$/i') })
            .locator('a'); 
              
        // 3. Assertion: Verify that the section actually contains links (is not empty)
        const linkCount = await aboutLinks.count();
        expect(linkCount).toBeGreaterThan(0);
        
        console.log(`Found ${linkCount} links under the ABOUT footer column.`);
    });
});



//About us locator
test ('About us locator',async({page})=>{
    await page.getByText('ABOUT')
    await page.getByText('Contact Us')
    await page.getByText('About Us')
    await page.getByText('Careers')
    await page.getByText('Flipkart Stories')
    await page.getByText('Press')
    await page.getByText('Flipkart Wholesale')
    await page.getByText('Corporate Information')

//[text()='About ']//following-sibling::a[text()='Contact Us']
//text()='About ']//following-sibling::a[text()='About Us']
//text()='About ']//following-sibling::a[text()='Careers']
//text()='About ']//following-sibling::a[text()='Flipkart Stories']
//text()='About ']//following-sibling::a[text()='Press']
//text()='About ']//following-sibling::a[text()='Flipkart Wholesale']
//text()='About ']//following-sibling::a[text()='Corporate Information']

  
})   
