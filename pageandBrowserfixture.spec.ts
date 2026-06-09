import { test, expect } from '@playwright/test'
import { TIMEOUT } from 'node:dns'

test("Title", async function ({ page }) {

//launch the url
//fill the username
//fill the pass
//click on login button
//validate if login is succesfull or not



})

test("Title1", async ({ browser }) => {

    const context = await browser.newContext()

    const page = await context.newPage()
    //await TIMEOUT(2000)
  //  const page1 = await context.newPage()

})
//page fixture- identifies  only one page in a browser
//browser fixture- identifies complete browser may contain one page
//or multiple page
 //writing locator
