import { test, expect  } from '@playwright/test';
import assert from 'assert';
import { only } from 'node:test';
import { json } from 'stream/consumers';

test.describe('Basic Navigation: website is opened', () => {
  test('Should load the webpage', async ({ page }) => {
    // Go to the homepage
    await page.goto('./');

    

  });
});

