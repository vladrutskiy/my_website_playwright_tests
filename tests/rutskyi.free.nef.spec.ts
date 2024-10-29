import { test, expect  } from '@playwright/test';
import assert from 'assert';
import { only } from 'node:test';
import { json } from 'stream/consumers';

test.describe('we are navigating to the home page', () => {
    test.beforeEach(async ({page}) => {
      
    await page.goto('', { waitUntil: 'networkidle' });
    
  })

  test('Nav menu is present', async ({ page }) => {
    await expect(page.getByText('HOME ABOUT PROJECTS')).toBeVisible();     
  });

  test('Nav menu buttons change color after hover: About', async ({ page }) => {
    await expect(page.getByText('HOME ABOUT PROJECTS')).toBeVisible(); 
    
    const aboutLink = page.getByRole('link', { name: 'About' });

  // Ensure the button-link is visible and stable before proceeding
  await aboutLink.waitFor({ state: 'visible', timeout: 10000 });

  // Check the button-links's color before hover
  const buttonColorBeforeHover = await aboutLink.evaluate((element) => {
    return window.getComputedStyle(element as HTMLElement).getPropertyValue('background-color');  // Cast to HTMLElement
  });
  console.log('Button color before hover:', buttonColorBeforeHover); // Log or assert

  // Hover over the button with the force option
  await aboutLink.hover({ force: true });

  // Check the button's color after hover
  const buttonColorAfterHover = await aboutLink.evaluate((element) => {
    return window.getComputedStyle(element as HTMLElement).getPropertyValue('background-color');  // Cast to HTMLElement
  });
  console.log('Button color after hover:', buttonColorAfterHover); // Log or assert

  // Example of asserting if the color changes
  expect(buttonColorBeforeHover).not.toBe(buttonColorAfterHover);






  });

  test('Nav menu buttons change color after hover: Projects', async ({ page }) => {
    await expect(page.getByText('HOME ABOUT PROJECTS')).toBeVisible(); 
    
    const aboutLink = page.getByRole('link', { name: 'Projects' });

  // Ensure the button-link is visible and stable before proceeding
  await aboutLink.waitFor({ state: 'visible', timeout: 10000 });

  // Check the button-links's color before hover
  const buttonColorBeforeHover = await aboutLink.evaluate((element) => {
    return window.getComputedStyle(element as HTMLElement).getPropertyValue('background-color');  // Cast to HTMLElement
  });
  console.log('Button color before hover:', buttonColorBeforeHover); // Log or assert

  // Hover over the button with the force option
  await aboutLink.hover({ force: true });

  // Check the button's color after hover
  const buttonColorAfterHover = await aboutLink.evaluate((element) => {
    return window.getComputedStyle(element as HTMLElement).getPropertyValue('background-color');  // Cast to HTMLElement
  });
  console.log('Button color after hover:', buttonColorAfterHover); // Log or assert

  // Example of asserting if the color changes
  expect(buttonColorBeforeHover).not.toBe(buttonColorAfterHover);






  });

  test('Nav menu buttons change color after hover: Certificates', async ({ page }) => {
    await expect(page.getByText('HOME ABOUT PROJECTS')).toBeVisible(); 
    
    const aboutLink = page.getByRole('link', { name: 'Certificates' });

  // Ensure the button-link is visible and stable before proceeding
  await aboutLink.waitFor({ state: 'visible', timeout: 10000 });

  // Check the button-links's color before hover
  const buttonColorBeforeHover = await aboutLink.evaluate((element) => {
    return window.getComputedStyle(element as HTMLElement).getPropertyValue('background-color');  // Cast to HTMLElement
  });
  console.log('Button color before hover:', buttonColorBeforeHover); // Log or assert

  // Hover over the button with the force option
  await aboutLink.hover({ force: true });

  // Check the button's color after hover
  const buttonColorAfterHover = await aboutLink.evaluate((element) => {
    return window.getComputedStyle(element as HTMLElement).getPropertyValue('background-color');  // Cast to HTMLElement
  });
  console.log('Button color after hover:', buttonColorAfterHover); // Log or assert

  // Example of asserting if the color changes
  expect(buttonColorBeforeHover).not.toBe(buttonColorAfterHover);






  });

    test('Nav menu buttons change color after hover: Contact', async ({ page }) => {
    await expect(page.getByText('HOME ABOUT PROJECTS')).toBeVisible(); 
    
    const aboutLink = page.getByRole('link', { name: 'Contact' });

  // Ensure the button-link is visible and stable before proceeding
  await aboutLink.waitFor({ state: 'visible', timeout: 10000 });

  // Check the button-links's color before hover
  const buttonColorBeforeHover = await aboutLink.evaluate((element) => {
    return window.getComputedStyle(element as HTMLElement).getPropertyValue('background-color');  // Cast to HTMLElement
  });
  console.log('Button color before hover:', buttonColorBeforeHover); // Log or assert

  // Hover over the button with the force option
  await aboutLink.hover({ force: true });

  // Check the button's color after hover
  const buttonColorAfterHover = await aboutLink.evaluate((element) => {
    return window.getComputedStyle(element as HTMLElement).getPropertyValue('background-color');  // Cast to HTMLElement
  });
  console.log('Button color after hover:', buttonColorAfterHover); // Log or assert

  // Example of asserting if the color changes
  expect(buttonColorBeforeHover).not.toBe(buttonColorAfterHover);






  });


  test('home and vlad rutskiy are visible', async ({ page }) => {
  await expect(page.locator('#home')).toBeVisible();
  await expect(page.getByText('Vlad Rutskyi', { exact: true })).toBeVisible();     
  });

  test('ABOUT ME: heading is visible and texts are present', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'ABOUT ME' })).toBeVisible(); 
    await expect(page.locator('#about')).toContainText('I\'m passionate about ensuring the quality and excellence of digital products.'); 
    await expect(page.locator('#about')).toContainText('I\'m a results-driven QA Engineer you can count on. I have a proven track record of 7+ years in ensuring the quality and excellence of digital products. I specialize in providing thorough regression testing, creating effective test cases, and optimizing testing processes for maximum efficiency. Dedicated to a thorough attention for detail, I have successfully contributed to the seamless delivery of high-quality software, finding critical and edge-case issues. Committed to continuous improvement, I stay abreast of industry trends and emerging technologies.');
    await expect(page.getByText('My name is Vald Rutskyi')).toBeVisible();
    await expect(page.locator('#about')).toContainText('Welcome to my website. I\'m attentive, analytical, and flexible Software QA Engineer. Dedicated to the excellence of digital products and managing complex projects. Professional and accurate in developing test strategies, and regression testing. Able to work with minimum supervision. I possess close attention to detail and analytical thinking, contributing to the continuous improvement of the delivery of high-quality software. I have hands-on experience with large SaaS, augmented reality, banking, and other projects. Feel free to contact me, to discuss how my expertise and experience can elevate your team’s product quality.');
    await expect(page.getByRole('img', { name: 'Photo of Me' })).toBeVisible();   
  });

 
  test('Scroll down till Download resume button', async ({ page }) => {
        while (!(await page.getByRole('link', { name: 'Download resume' }).isVisible())) {
      await page.evaluate(() => window.scrollBy(0, 1500));  // Scroll down by 500 pixels
      await page.waitForTimeout(500);  // Wait for a short time after scrolling
    }
    // Assert that the element is now visible
      await expect(page.getByRole('link', { name: 'Download resume' })).toBeVisible();
    
  });

  test('Check the color of Download resume button before and after hover', async ({ page }) => {
       
    // Scroll down until the "Download resume" button is visible
  while (!(await page.getByRole('link', { name: 'Download resume' }).isVisible())) {
    await page.evaluate(() => window.scrollBy(0, 1500));  // Scroll down by 1500 pixels
    await page.waitForTimeout(500);  // Wait for a short time after scrolling
  }

  const downloadButton = page.getByRole('link', { name: 'Download resume' });

  // Ensure the button is visible and stable before proceeding
  await downloadButton.waitFor({ state: 'visible', timeout: 10000 });

  // Optionally disable animations for testing
  await page.evaluate(() => {
    document.querySelectorAll('*').forEach(el => {
      (el as HTMLElement).style.transition = 'none';  // Cast to HTMLElement to access `style`
    });
  });

  // Check the button's color before hover
  const buttonColorBeforeHover = await downloadButton.evaluate((element) => {
    return window.getComputedStyle(element as HTMLElement).getPropertyValue('background-color');  // Cast to HTMLElement
  });
  console.log('Button color before hover:', buttonColorBeforeHover); // Log or assert

  // Hover over the button with the force option
  await downloadButton.hover({ force: true });

  // Check the button's color after hover
  const buttonColorAfterHover = await downloadButton.evaluate((element) => {
    return window.getComputedStyle(element as HTMLElement).getPropertyValue('background-color');  // Cast to HTMLElement
  });
  console.log('Button color after hover:', buttonColorAfterHover); // Log or assert

  // Example of asserting if the color changes
  expect(buttonColorBeforeHover).not.toBe(buttonColorAfterHover);
  });


  test('Check that the Download resume button works and opens correct window', async ({ page }) => {

    // Ensure the link is visible
  await expect(page.getByRole('link', { name: 'Download resume' })).toBeVisible();

  // Wait for any animations to settle
 await page.waitForTimeout(500); // Adjust the timeout if necessary

  // Wait for the popup to open
  const [popup] = await Promise.all([
    page.waitForEvent('popup'), // Waits for the popup window
    page.getByRole('link', { name: 'Download resume' }).click({ force: true }), // Triggers the popup
  ]);

  // Wait for the popup content to load and verify the text
  await expect(popup.getByText('Vlad Rutskiy New Resume parent')).toBeVisible();

});
  
test('Scroll down till Projects section ', async ({ page }) => {
  while (!(await page.locator('#projects').isVisible())) {
    await page.evaluate(() => window.scrollBy(0, 1500));  // Scroll down by 1500 pixels
    await page.waitForTimeout(500);  // Short wait after scrolling
  }
  
// Assert that the element is now visible
await expect(page.locator('#projects' )).toBeVisible();
await expect(page.getByText('Several words about projects')).toBeVisible();
}); 

test('Scroll down till First visible project (Upward) checking the texts', async ({ page }) => {
  while (!(await page.getByRole('link', { name: 'Upward Aviation Services' }).isVisible())) {
    await page.evaluate(() => window.scrollBy(0, 1500));  // Scroll down by 1500 pixels
    await page.waitForTimeout(500);  // Short wait after scrolling
  }

  
// Assert that the element is now visible
// await expect(page.getByText('This project started as a website renewal.')).toBeVisible();
await expect(page.locator('#projects')).toContainText('This project started as a website renewal. But we ended up with almost the whole rebranding process. Upward Aviation Services is a Calgary-based company that provides different aircraft-related services, from training to import assistance. At first, we created a website. The next step was creating a logo, which was warmly accepted by the company owners. After that, we created mockups for printing the company logo on clothes. The project is ongoing. This project is developed with the assistance of Natalia Lozovska.');
}); 

test('Check the color of Show more button before and after hover', async ({ page }) => {
  // Scroll down until the "Load more" button is visible
  while (!(await page.getByRole('button', { name: 'Load more' }).first().isVisible())) {
    await page.evaluate(() => window.scrollBy(0, 1500)); // Scroll down by 1500 pixels
    await page.waitForTimeout(500); // Short wait after scrolling
    await page.evaluate(() => {
      document.querySelectorAll('*').forEach((el) => {
        (el as HTMLElement).style.transition = 'none';
      });
    });
  }

  const loadMoreButton = page.getByRole('button', { name: 'Load more' }).first();
  await loadMoreButton.waitFor({ state: 'visible', timeout: 10000 });

  // Ensure the button is visible and stable before proceeding
  await loadMoreButton.waitFor({ state: 'visible', timeout: 10000 });

  // Disable animations for testing
  await page.evaluate(() => {
    document.querySelectorAll('*').forEach(el => (el as HTMLElement).style.transition = 'none');
  });

  // Check the button's color before hover
  const buttonColorBeforeHover = await loadMoreButton.evaluate((element) => {
    return window.getComputedStyle(element as HTMLElement).getPropertyValue('background-color');
  });
  console.log('Button color before hover:', buttonColorBeforeHover);

  // Hover over the button
  await page.waitForTimeout(500); // Short delay for stability
  await loadMoreButton.hover({ force: true });


  // Check the button's color after hover
  const buttonColorAfterHover = await loadMoreButton.evaluate((element) => {
    return window.getComputedStyle(element as HTMLElement).getPropertyValue('background-color');
  });
  console.log('Button color after hover:', buttonColorAfterHover);

  // Assert if the color changes
  expect(buttonColorBeforeHover).not.toBe(buttonColorAfterHover);
});

test('Check the click on Show more button and list visibility ', async ({ page }) => {
  // Scroll down until the "Load more" button is visible
  while (!(await page.getByRole('button', { name: 'Load more' }).first().isVisible())) {
    await page.evaluate(() => window.scrollBy(0, 1500)); // Scroll down by 1500 pixels
    await page.waitForTimeout(500); // Short wait after scrolling
    await page.evaluate(() => {
      document.querySelectorAll('*').forEach((el) => {
        (el as HTMLElement).style.transition = 'none';
      });
    });
  }

  const loadMoreButton = page.getByRole('button', { name: 'Load more' }).first();
  await loadMoreButton.waitFor({ state: 'visible', timeout: 10000 });

  // Ensure the button is visible and stable before proceeding
  await loadMoreButton.waitFor({ state: 'visible', timeout: 10000 });

  // Disable animations for testing
  await page.evaluate(() => {
    document.querySelectorAll('*').forEach(el => (el as HTMLElement).style.transition = 'none');
  });

  
  // Hover over the button
  await page.waitForTimeout(500); // Short delay for stability
  await loadMoreButton.hover({ force: true });
  await page.getByRole('button', { name: 'Load more' }).first().click({ force: true });
  await expect(page.getByRole('list')).toBeVisible();
  await expect(page.getByRole('list')).toContainText('I mastered my knowledge about WordPress, building websites, launching them, and maintaining them on this platform. In addition, I learned how to work with different plugins, and how to avoid some WordPress website-building mistakes. Added reCaptcha spam protection. Added CloudFlare protection.');
  
});

test('Check the click on Show more button and click on Show less button ', async ({ page }) => {
  // Scroll down until the "Load more" button is visible
  while (!(await page.getByRole('button', { name: 'Load more' }).first().isVisible())) {
    await page.evaluate(() => window.scrollBy(0, 1500)); // Scroll down by 1500 pixels
    await page.waitForTimeout(500); // Short wait after scrolling
    await page.evaluate(() => {
      document.querySelectorAll('*').forEach((el) => {
        (el as HTMLElement).style.transition = 'none';
      });
    });
  }

  const loadMoreButton = page.getByRole('button', { name: 'Load more' }).first();
  await loadMoreButton.waitFor({ state: 'visible', timeout: 10000 });

  // Ensure the button is visible and stable before proceeding
  await loadMoreButton.waitFor({ state: 'visible', timeout: 10000 });

  // Disable animations for testing
  await page.evaluate(() => {
    document.querySelectorAll('*').forEach(el => (el as HTMLElement).style.transition = 'none');
  });

  
  // Hover over the button
  await page.waitForTimeout(500); // Short delay for stability
  await loadMoreButton.hover({ force: true });
  await page.getByRole('button', { name: 'Load more' }).first().click({ force: true });

  await page.waitForTimeout(500); // Short delay for stability
  await expect(page.getByRole('button', { name: 'Load less' })).toBeVisible();
  await page.getByRole('button', { name: 'Load less' }).click({ force: true });

  await page.waitForTimeout(500);
  await loadMoreButton.hover({ force: true });
 
  await expect(page.getByRole('list')).toBeHidden();

});








});



