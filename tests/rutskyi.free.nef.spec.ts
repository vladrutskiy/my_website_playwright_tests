import { test, expect } from '@playwright/test';
import assert from 'assert';
import { only } from 'node:test';
import { json } from 'stream/consumers';

// test.describe('Basic Navigation and Page Structure Tests', () => {
//   test('Should load the homepage and check visibility of key elements', async ({ page }) => {
//     // Go to the homepage
//     await page.goto('./');

//     // Wait for the header to load and check visibility
//     const header = await page.locator('header');
//     await header.waitFor({ state: 'visible', timeout: 10000 }); // Adjust the timeout
//     await expect(header).toBeVisible();

//     // Wait for the footer to load and check visibility
//     const footer = await page.locator('footer');
//     await footer.waitFor({ state: 'visible', timeout: 10000 });
//     await expect(footer).toBeVisible();

//     // Check key navigation links
//     const homeLink = await page.locator('text=Home');
//     await expect(homeLink).toBeVisible();
//     const aboutLink = await page.locator('text=About');
//     await expect(aboutLink).toBeVisible();
//     const contactLink = await page.locator('text=Contact');
//     await expect(contactLink).toBeVisible();
//   });
// });


test.describe('Contact Form Tests', () => {
    test('Should fill and submit the contact form', async ({ page }) => {
      // Navigate to the contact page
      await page.goto('./');
  
      // Wait for the form elements to be visible before interacting
      await page.locator('input[name="name"]').waitFor({ state: 'visible', timeout: 10000 });
      await page.fill('input[name="name"]', 'John Doe');
      await page.fill('input[name="email"]', 'johndoe@example.com');
      await page.fill('textarea[name="message"]', 'This is a test message.');
  
      // Wait for and check the checkbox
      const consentCheckbox = await page.locator('input[type="checkbox"]');
      await consentCheckbox.waitFor({ state: 'visible', timeout: 10000 });
      await consentCheckbox.check();
  
      // Submit the form
      await page.click('button[type="submit"]');
  
      // Verify success message (wait for it to appear)
      const successMessage = await page.locator('.success-message');
      await successMessage.waitFor({ state: 'visible', timeout: 10000 });
      await expect(successMessage).toHaveText('Thank you for contacting us!');
    });
  });