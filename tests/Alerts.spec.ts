
import { test, expect } from '@playwright/test';

//Alerts-dialog event in web page
//1. Simple Alerts- only have one button
//2.Confirm Alerts-yes/no, submit/cancel
//3.prompt alerts-Along with yes/no, Input box as well

//dialog events-Alerts
//pop up event- child window/tab/page
//download event-file download
//dialog-
//1.
//2.
//3.
test("Alerts or pop-up in Web-page", async ({ page }) => {
    await page.goto('https://demoqa.com/alerts');

    // Handle the next dialog and accept it
    page.once('dialog', async dialog => {
        expect(dialog.message()).toBeTruthy();
        await dialog.accept();
    });

    // Click the button that triggers the alert
    await page.click('#alertButton');
});