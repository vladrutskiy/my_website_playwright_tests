import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('./');
  await expect(page.getByText('HOME ABOUT PROJECTS')).toBeVisible();
  await page.locator('#home').click();
  await expect(page.locator('#home')).toBeVisible();
  await expect(page.getByText('Vlad Rutskyi', { exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'ABOUT ME' })).toBeVisible();
  
  // await expect(page.getByText('passionate about ensuring')).toBeVisible();
  await expect(page.locator('#about')).toContainText('I\'m passionate about ensuring the quality and excellence of digital products.');
  // await expect(page.getByText('m a results-driven QA')).toBeVisible();
  await expect(page.locator('#about')).toContainText('I\'m a results-driven QA Engineer you can count on. I have a proven track record of 7+ years in ensuring the quality and excellence of digital products. I specialize in providing thorough regression testing, creating effective test cases, and optimizing testing processes for maximum efficiency. Dedicated to a thorough attention for detail, I have successfully contributed to the seamless delivery of high-quality software, finding critical and edge-case issues. Committed to continuous improvement, I stay abreast of industry trends and emerging technologies.');
  await expect(page.getByText('My name is Vald Rutskyi')).toBeVisible();
  // await expect(page.getByText('Welcome to my website. I\'m')).toBeVisible();
  await expect(page.locator('#about')).toContainText('Welcome to my website. I\'m attentive, analytical, and flexible Software QA Engineer. Dedicated to the excellence of digital products and managing complex projects. Professional and accurate in developing test strategies, and regression testing. Able to work with minimum supervision. I possess close attention to detail and analytical thinking, contributing to the continuous improvement of the delivery of high-quality software. I have hands-on experience with large SaaS, augmented reality, banking, and other projects. Feel free to contact me, to discuss how my expertise and experience can elevate your team’s product quality.');
  await expect(page.getByRole('img', { name: 'Photo of Me' })).toBeVisible();
  
  await expect(page.getByRole('link', { name: 'Download resume' })).toBeVisible();
  await expect(page.getByText('+ Years of experience')).toBeVisible();
  await expect(page.getByText('7+ Years of experience 7+')).toBeVisible();
  await expect(page.locator('.bgimg-2')).toBeVisible();
  await expect(page.getByText('Projects', { exact: true })).toBeVisible();
  await expect(page.getByText('PROJECTS Several words about')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'PROJECTS' })).toBeVisible();
  await expect(page.getByText('Several words about projects')).toBeVisible();
});