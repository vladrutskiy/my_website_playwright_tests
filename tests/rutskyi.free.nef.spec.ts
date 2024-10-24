import { test, expect } from '@playwright/test';
import assert from 'assert';
import { only } from 'node:test';
import { json } from 'stream/consumers';

test.describe('Basic Navigation and Page Structure Tests', () => {
    test('Should load the homepage and check visibility of key elements', async ({ page }) => {
      await page.goto('./');
  
      // Check if the title contains expected text
      await expect(page).toHaveTitle(/Rutskyi/);
  
      // Check if the header is visible
      const header = await page.locator('header');
      await expect(header).toBeVisible();
  
      // Check if the footer is visible
      const footer = await page.locator('footer');
      await expect(footer).toBeVisible();
  
      // Check if key navigation links are present
      const homeLink = await page.locator('text=Home');
      const aboutLink = await page.locator('text=About');
      const contactLink = await page.locator('text=Contact');
      
      await expect(homeLink).toBeVisible();
      await expect(aboutLink).toBeVisible();
      await expect(contactLink).toBeVisible();
    });
  });