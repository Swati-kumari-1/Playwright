//testfile.spec.ts
//testfile.spec.ts

import { test, expect } from '@playwright/test';

test("Login into the Application", async ({ page }) => {
    //await page.waitForTimeout(2000)
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.waitForTimeout(11000)
await page.locator("input[name='username']").fill("Admin");
await expect(page.locator("input[name='username']")).toHaveValue("Admin",{ timeout: 2000 });
await page.locator("input[name='password']").fill("admin123");
//await page.locator("#password").pressSequentially("admin123");
await page.locator("button[type='submit']").click();
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
page.close()

})
// expect()- assertion- to verify the expected result with actual
// result
//toHaveURL- to verify the URL of the page
//pressSequentially(string)- to perform multiple actions in sequence 
// on the same element
//tophavetext()- to verify the text of the element
//containstext()- to verify the partial text of the element

//-----------------------------------------------------------//
//Select radio and check boxes
test("Select radio and check boxes", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    //click()-click on an element
    //check()- to select the checkbox or radio button
    //uncheck()- to deselect the checkbox
    //isChecked()- to verify whether the checkbox or radio button is selected or not
    await page.getByRole('radio', { name: 'Female' }).check();
    await expect(page.getByRole('radio', { name:'Female' })).toBeChecked();

    //check the checkbox
    await page.getByRole('checkbox', { name: 'monday' }).check();
    await expect(page.getByRole('checkbox', { name: 'monday' })).toBeChecked();
    await page.getByRole('checkbox', { name: 'tuesday' }).check();
    await expect(page.getByRole('checkbox', { name: 'tuesday' })).toBeChecked();

})

//test for dropdown
test.only("Select dropdown", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    //selectOption()- to select the option from dropdown
    //toHaveValue()- to verify the value of the element
    //textcontent()- to get the text of the element
    //innertext()- to get the text from visible part of the element
   const text = await page.locator('h1.title').innerText();
    expect(text).toBe('Automation Testing Practice');
    console.log(text);

//get the text from multiple elements
//allInnerTexts()- to get the text from multiple elements
//allTextContents()- to get the text from multiple elements including
//  hidden text

const allText = await page.locator('h2.title').allInnerTexts();
console.log(allText);
//console.log(allText[0]);

});