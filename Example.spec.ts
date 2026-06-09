
import{test,expect} from '@playwright/test'

//test()- Helps us in terms of writing the TC in playewright
//expect()- Helps us in terms of writing assertion in playwright
//fixture- special type of objects helps in setting up and tear
//down the process ,browser, context,request
// diff b/w page and browser fixture


test('Get started link', async({page})=>{

    await page.goto("https://playwright.dev/java/")
    await page.getByRole('link', {name: 'Get started'}).click()
    await expect (page.getByRole('heading', {name: 'Installation'})).toBeVisible()

});

//toBeVisible() returns a Promise. Without await, 
// Playwright may show errors like:

//Promise was not awaited
//Assertion may fail unexpectedly

//Promise- Pending,succes,failure




