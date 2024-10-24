import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('./');
  await expect(page.getByRole('heading', { name: 'PROJECTS' })).toBeVisible();
  await expect(page.getByText('Several words about projects')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Upward Aviation Services' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Upward Aviation Services' })).toBeVisible();
  await expect(page.getByText('Aug 2024 - Present, Calgary,')).toBeVisible();
  // await expect(page.getByText('Aug 2024 - Present, Calgary,')).toBeVisible();
  await expect(page.locator('#projects')).toContainText('Aug 2024 - Present, Calgary, Alberta, Canada');
  await expect(page.getByRole('img', { name: 'Upward Aviation Services Logo' })).toBeVisible();
  // await page.getByRole('img', { name: 'Upward Aviation Services Logo' }).click();
  // await expect(page.locator('#img01')).toBeVisible();
  // await expect(page.getByText('Upward Aviation Services Logo')).toBeVisible();
  // await expect(page.getByTitle('Close Modal Image').locator('i')).toBeVisible();
  // await page.getByTitle('Close Modal Image').locator('i').click();
  await page.getByText('This project started as a').scrollIntoViewIfNeeded();
  // await page.getByTitle('Close Modal Image').locator('i').click();
  await expect(page.getByText('This project started as a')).toBeVisible();
  await expect(page.locator('#projects')).toContainText('This project started as a website renewal. But we ended up with almost the whole rebranding process. Upward Aviation Services is a Calgary-based company that provides different aircraft-related services, from training to import assistance. At first, we created a website. The next step was creating a logo, which was warmly accepted by the company owners. After that, we created mockups for printing the company logo on clothes. The project is ongoing. This project is developed with the assistance of Natalia Lozovska.');
  await expect(page.getByRole('link', { name: 'Natalia Lozovska' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Load more' }).first()).toBeVisible();
  

});