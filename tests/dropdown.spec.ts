import { test, expect } from '@playwright/test';
//1.Static drop down
//a)Multi select drop down
//b)Dynamic drop down

//2.Dynamic drop down
//a)single drop down
//b)multiple drop down

//Development of dropdown
//1. using <select> tag
//2. using div tag,span tag,ul tag,li tag
//3. using input tag

// Select tag- static dropdown
//1.launch the application
//2.click on the dropdown
//3.select the option from dropdown
//4.verify the selected option
//5.selectoptions()- to select the option from dropdown

/*test("Select dropdown", async ({ page }) => {

await page.goto("https://practice.expandtesting.com/dropdown/")
//click on please select dropdown
await page.locator("#dropdown").click();
await page.locator("#dropdown").selectOption("option 1");

})*/

//Test2-
  test("Select dropdown", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/dropdownsPractise/");

  await page.locator("#ctl00_mainContent_rbtnl_Trip_0").check();

  await page.locator("#ctl00_mainContent_ddl_originStation1_CTXT").click();
  await page.locator("a[value='BLR']").click();

  await page.locator("a[value='MAA']").click();

  await page.locator(".ui-state-default").nth(19).click();

  await page.locator("#divpaxinfo").click();

  for (let i = 0; i < 3; i++) {
    await page.locator("#hrefIncAdt").click();
  }

  await page.locator("#btnclosepaxoption").click();

  await page.locator("#ctl00_mainContent_chk_friendsandfamily").check();

  await page.locator("#ctl00_mainContent_btn_FindFlights").click();
});


test("handling dropdown using using Seelect tag", async ({ page }) => {
//launch the application
await page.goto("https://demoqa.com/select-menu")
//locate the drop down and click on it
const dropdown = await page.locator("#withOptGroup").click;

//get the value of the dropdown gropp1 and option1and print it
//await page.locator("#withOptGroup").selectOption("option1");
await page.locator('div.css-hlgwow').locator('div').nth(1).click()

})


//Assignment to complete-demoqa.com/select-menu 
//Select the value from the drop down which has been using 
// non-select
//and multiple select dropdown and print the value of the selected option in the console
//select tag and print the value of the selected option in the console

test.only('Handle dropdowns in DemoQA', async ({ page }) => {

    await page.goto('https://demoqa.com/select-menu');

    // ===============================
    // 1. Non-select dropdown
    // ===============================

     await page.locator('#withOptGroup').click();
    await page.getByText('Group 1, option 1').click();

    const selectedValue = await page.locator('#withOptGroup').textContent();
    console.log('Selected Non-Select Value:', selectedValue);
// ===============================// 
// 2. Select one option
await page.locator("#selectOne").click()
await page.getByText('Ms.', { exact: true }).click();
const option = await page.locator('#selectOne').textContent();
console.log('Selected Value:', option);

//3. Select Old style select menu
await page.locator('#oldSelectMenu').selectOption("Red")
const option2= await page.locator('#oldSelectMenu').inputValue();
console.log('Selected Value',option2)

//Multi-select Drop down
//selecting 1st time green
await page.locator('input[id*="react-select-4"]').fill('Green');
await page.keyboard.press('Enter');

await page.locator('input[id*="react-select-4"]').fill('Black');
await page.keyboard.press('Enter');

await page.locator('input[id*="react-select-4"]').fill('Blue');
await page.keyboard.press('Enter');
// Print selected values
const selectedColors = await page.locator('.css-12jo7m5').allTextContents();

console.log('Selected Colors:', selectedColors);

})









