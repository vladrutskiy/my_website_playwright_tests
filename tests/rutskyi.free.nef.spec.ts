import { test, expect  } from '@playwright/test';
import assert from 'assert';
import { only } from 'node:test';
import { json } from 'stream/consumers';

test.describe('Navigation menu UI tests', () => {
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

});


test.describe('Home section Ui tests', () => {
  test.beforeEach(async ({page}) => {
    
  await page.goto('', { waitUntil: 'networkidle' });
  
})

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


});

//projects section UI tests
test.describe(' Upward Ui tests', () => {
  test.beforeEach(async ({page}) => {
    
  await page.goto('', { waitUntil: 'networkidle' });
  
})

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


test.describe('SeeHearAct UI tests', () => {
  test.beforeEach(async ({page}) => {
    
  await page.goto('', { waitUntil: 'networkidle' });
  
})
test('Check the click on Show more button and Testing SeeHearAct ', async ({ page }) => {
  // Scroll down until the "Load more" button is visible
  while (!(await page.getByRole('button', { name: 'Load more' }).nth(1).isVisible())) {
    await page.evaluate(() => window.scrollBy(0, 1500)); // Scroll down by 1500 pixels
    await page.waitForTimeout(500); // Short wait after scrolling
    await page.evaluate(() => {
      document.querySelectorAll('*').forEach((el) => {
        (el as HTMLElement).style.transition = 'none';
      });
    });
  }

  const loadMoreButton = page.getByRole('button', { name: 'Load more' }).nth(1);
  await loadMoreButton.waitFor({ state: 'visible', timeout: 10000 });

  // Ensure the button is visible and stable before proceeding
  await loadMoreButton.waitFor({ state: 'visible', timeout: 10000 });

  // Disable animations for testing
  await page.evaluate(() => {
    document.querySelectorAll('*').forEach(el => (el as HTMLElement).style.transition = 'none');
  });

  
  // Hover over the button and opening Projects hidden content
  await page.waitForTimeout(500); // Short delay for stability
  await loadMoreButton.hover({ force: true });
  await page.getByRole('button', { name: 'Load more' }).nth(1).click({ force: true });



  //SeeHearAct titles, pictures and text are visible
  await expect(page.getByRole('link', { name: 'See.Hear.Act' })).toBeVisible();
  await expect(page.getByText('Aug 2024 - Sep 2024, Calgary')).toBeVisible();
  await expect(page.getByRole('img', { name: 'See Hear Act image' })).toBeVisible();
  await expect(page.getByRole('list')).toBeHidden();
  await expect(page.locator('#more8 div').filter({ hasText: 'See.Hear.Act Aug 2024 - Sep 2024, Calgary, Alberta, Canada It was a 2 month' }).getByRole('button')).toBeVisible();
  await page.locator('#more8 div').filter({ hasText: 'See.Hear.Act Aug 2024 - Sep 2024, Calgary, Alberta, Canada It was a 2 month' }).getByRole('button').click({ force: true });
  await expect(page.locator('#more8')).toContainText('It was a 2 month contract. To cretae and test a website. This website is built as an event landing page. See Hear Act is a one-day conference for people interested in understanding Islam’s influence in the West. The conference will also give you practical help to respond in ways that will encourage Muslims to trust in Jesus and flourish in a new life with Him. The second part of the project was developing a 1/3 letter-sized flyer and a full-scaled letter-sized advertisement. This project is developed with the assistance of Natalia Lozovska.');
  await expect(page.getByRole('list')).toBeVisible();
  await expect(page.getByRole('list')).toContainText('I learned much about WordPress, building websites, launching them, and maintaining them on this platform. Additionally, I learned about plugins and how to install and configure them. Added reCaptcha spam protection. Set up Consent Preferences. Practiced my PhotoShop knowledge.');
  await expect(page.locator('#more8').getByRole('button', { name: 'Load less' })).toBeVisible();
  await page.locator('#more8').getByRole('button', { name: 'Load less' }).click({ force: true });

  // Cosing projects
  await page.waitForTimeout(500); // Short delay for stability
  await expect(page.getByRole('button', { name: 'Load less' })).toBeVisible();
  await page.getByRole('button', { name: 'Load less' }).click({ force: true });

  await page.waitForTimeout(500);
  await loadMoreButton.hover({ force: true });
 
  await expect(page.getByRole('list')).toBeHidden();

});


});

test.describe('Abbydale UI tests', () => {
  test.beforeEach(async ({page}) => {
    
  await page.goto('', { waitUntil: 'networkidle' });
  
})
test('Check the click on Show more button and Testing Abbydale ', async ({ page }) => {
  // Scroll down until the "Load more" button is visible
  while (!(await page.getByRole('button', { name: 'Load more' }).nth(1).isVisible())) {
    await page.evaluate(() => window.scrollBy(0, 1500)); // Scroll down by 1500 pixels
    await page.waitForTimeout(500); // Short wait after scrolling
    await page.evaluate(() => {
      document.querySelectorAll('*').forEach((el) => {
        (el as HTMLElement).style.transition = 'none';
      });
    });
  }

  const loadMoreButton = page.getByRole('button', { name: 'Load more' }).nth(1);
  await loadMoreButton.waitFor({ state: 'visible', timeout: 10000 });

  // Ensure the button is visible and stable before proceeding
  await loadMoreButton.waitFor({ state: 'visible', timeout: 10000 });

  // Disable animations for testing
  await page.evaluate(() => {
    document.querySelectorAll('*').forEach(el => (el as HTMLElement).style.transition = 'none');
  });

  
  // Hover over the button and opening Projects hidden content
  await page.waitForTimeout(500); // Short delay for stability
  await loadMoreButton.hover({ force: true });
  await page.getByRole('button', { name: 'Load more' }).nth(1).click({ force: true });



  //Abbeydale titles, pictures and texts are visible
  await expect(page.getByRole('link', { name: 'Abbeydale Christian Fellowship' })).toBeVisible();
  await expect(page.getByText('May 2024 - Present, Calgary,')).toBeVisible();
  await expect(page.getByRole('img', { name: 'Abbeydale Christian' })).toBeVisible();
  //ensuring the list is hidden
  await expect(page.getByRole('list')).toBeHidden();
  //locating the Abbeydale load more button and click on it
  await expect(page.locator('#myBtn4')).toBeVisible();
  await page.locator('#myBtn4').click({ force: true });
  //locating ex-hidden list is shown
  await expect(page.getByRole('list')).toBeVisible();
  await expect(page.getByRole('list')).toContainText('I learned a lot about vulnerabilities in old versions of WordPress-hosted websites. I learned how to fix those issues. I started my journey in learning Playwright and created a small automated set of tests. Practiced my API testing knowledge.');
  //locating Abbeydayle show less button and press on it
  await expect(page.locator('#more8').getByRole('button', { name: 'Load less' })).toBeVisible();
  await page.locator('#more8').getByRole('button', { name: 'Load less' }).click({ force: true });

  // Closing projects container
  await page.waitForTimeout(500); // Short delay for stability
  await expect(page.getByRole('button', { name: 'Load less' })).toBeVisible();
  await page.getByRole('button', { name: 'Load less' }).click({ force: true });

  await page.waitForTimeout(500);
  await loadMoreButton.hover({ force: true });
 
  await expect(page.getByRole('list')).toBeHidden();

});

});

test.describe('Portside UI tests', () => {
  test.beforeEach(async ({page}) => {
    
  await page.goto('', { waitUntil: 'networkidle' });
  
})
test('Check the click on Show more button and Testing Portside ', async ({ page }) => {
  // Scroll down until the "Load more" button is visible
  while (!(await page.getByRole('button', { name: 'Load more' }).nth(1).isVisible())) {
    await page.evaluate(() => window.scrollBy(0, 1500)); // Scroll down by 1500 pixels
    await page.waitForTimeout(500); // Short wait after scrolling
    await page.evaluate(() => {
      document.querySelectorAll('*').forEach((el) => {
        (el as HTMLElement).style.transition = 'none';
      });
    });
  }

  const loadMoreButton = page.getByRole('button', { name: 'Load more' }).nth(1);
  await loadMoreButton.waitFor({ state: 'visible', timeout: 10000 });

  // Ensure the button is visible and stable before proceeding
  await loadMoreButton.waitFor({ state: 'visible', timeout: 10000 });

  // Disable animations for testing
  await page.evaluate(() => {
    document.querySelectorAll('*').forEach(el => (el as HTMLElement).style.transition = 'none');
  });

  
  // Hover over the button and opening Projects hidden content
  await page.waitForTimeout(500); // Short delay for stability
  await loadMoreButton.hover({ force: true });
  await page.getByRole('button', { name: 'Load more' }).nth(1).click({ force: true });



  //Portside titles, pictures and texts are visible
  await expect(page.getByRole('link', { name: 'Portside' })).toBeVisible();
  await expect(page.getByText('Feb 2022 - Feb 2024')).toBeVisible();
  await expect(page.getByRole('img', { name: 'Portside logo' })).toBeVisible();
  await expect(page.locator('#more8')).toContainText('As the Software QA Team Lead at Portside Inc., I led the testing efforts for the Trip Assist project. This innovative solution automated flight change notifications, seamlessly integrated with scheduling software and provided 360-degree visibility into booking statuses. My leadership ensured the robustness of key features, including flexible booking management, streamlined billing processes, and empowering crew members with real-time access to flight schedules through the Trip Assist mobile app.');
  //ensuring the list is hidden
  await expect(page.getByRole('list')).toBeHidden();
  //locating the Portside load more button and click on it
  await expect(page.locator('#more8 div').filter({ hasText: 'Portside Feb 2022 - Feb 2024 California, US, Remote As the Software QA Team' }).getByRole('button')).toBeVisible();
  await page.locator('#more8 div').filter({ hasText: 'Portside Feb 2022 - Feb 2024 California, US, Remote As the Software QA Team' }).getByRole('button').click({ force: true });
  //locating ex-hidden list is shown
  await expect(page.getByRole('list')).toBeVisible();
  await expect(page.getByRole('list')).toContainText('Successfully streamlined Portside\'s QA processes by meticulously evaluating and categorizing test cases. Significantly reduced the number of low-priority test cases, leading to a remarkable 20% acceleration in regression testing speed. Actively collaborated with cross-functional teams, including development and product management, to align QA processes with the overall project goals. Implemented robust quality metrics to monitor and measure the effectiveness of the QA processes. Initiated knowledge-sharing sessions to disseminate best practices, empowering team members to contribute more effectively to the testing process. Recognized as the sole QA tester for the corporate website, showcasing expertise in end-to-end testing. Acknowledged for exceptional contributions to the Auth0 implementation, ensuring a secure and efficient authentication process. Played a pivotal role in identifying and addressing critical security issues, increasing the overall security of the corporate system.');
  //locating Portside show less button and press on it
  await expect(page.locator('#more8').getByRole('button', { name: 'Load less' })).toBeVisible();
  await page.locator('#more8').getByRole('button', { name: 'Load less' }).click({ force: true });

  // Closing projects container
  await page.waitForTimeout(500); // Short delay for stability
  await expect(page.getByRole('button', { name: 'Load less' })).toBeVisible();
  await page.getByRole('button', { name: 'Load less' }).click({ force: true });

  await page.waitForTimeout(500);
  await loadMoreButton.hover({ force: true });
 
  await expect(page.getByRole('list')).toBeHidden();

});

});

test.describe('Reflekt UI tests', () => {
  test.beforeEach(async ({page}) => {
    
  await page.goto('', { waitUntil: 'networkidle' });
  
})
test('Check the click on Show more button and Testing Reflekt ', async ({ page }) => {
  // Scroll down until the "Load more" button is visible
  while (!(await page.getByRole('button', { name: 'Load more' }).nth(1).isVisible())) {
    await page.evaluate(() => window.scrollBy(0, 1500)); // Scroll down by 1500 pixels
    await page.waitForTimeout(500); // Short wait after scrolling
    await page.evaluate(() => {
      document.querySelectorAll('*').forEach((el) => {
        (el as HTMLElement).style.transition = 'none';
      });
    });
  }

  const loadMoreButton = page.getByRole('button', { name: 'Load more' }).nth(1);
  await loadMoreButton.waitFor({ state: 'visible', timeout: 10000 });

  // Ensure the button is visible and stable before proceeding
  await loadMoreButton.waitFor({ state: 'visible', timeout: 10000 });

  // Disable animations for testing
  await page.evaluate(() => {
    document.querySelectorAll('*').forEach(el => (el as HTMLElement).style.transition = 'none');
  });

  
  // Hover over the button and opening Projects hidden content
  await page.waitForTimeout(500); // Short delay for stability
  await loadMoreButton.hover({ force: true });
  await page.getByRole('button', { name: 'Load more' }).nth(1).click({ force: true });



  //Reflekt titles, pictures and texts are visible
  await expect(page.getByRole('link', { name: 'RE\'FLEKT' })).toBeVisible();
  await expect(page.getByText('Apr 2021 - Dec 2021 Munich,')).toBeVisible();
  await expect(page.getByRole('img', { name: 'Reflekt logo' })).toBeVisible();
  await expect(page.locator('#more8')).toContainText('In role at RE\'FLEKT, a Munich-based technology company which specialized in Augmented and Mixed Reality applications. Contributed to the quality assurance of their main product, REFLEKT Remote. This innovative solution was used by wide-known clients such as Audi, BMW, and Bosch. It was focused on enhancing business continuity and operational efficiency by providing secure and enterprise-ready remote support through AR and live video on desktop, mobile devices, and wearables. Played a key role in ensuring the reliability and effectiveness of this cutting-edge technology for front-line workers and technicians.');
  //ensuring the list is hidden
  await expect(page.getByRole('list')).toBeHidden();
  //locating the Reflekt load more button and click on it
  await expect(page.locator('#more8 div').filter({ hasText: 'RE\'FLEKT Apr 2021 - Dec 2021 Munich, Germany, Remote In role at RE\'FLEKT, a' }).getByRole('button')).toBeVisible();
  await page.locator('#more8 div').filter({ hasText: 'RE\'FLEKT Apr 2021 - Dec 2021 Munich, Germany, Remote In role at RE\'FLEKT, a' }).getByRole('button').click({ force: true });
  //locating ex-hidden list is shown
  await expect(page.getByRole('list')).toBeVisible();
  await expect(page.getByRole('list')).toContainText('Performed complex testing, which lead to the resolution of edge and high-priority (blocking) issues. Expansion of test case coverage to at least 80% of product functionality. Collaboration with the Development team, for the successful delivery of planned user stories. Establishing effective communication channels with cross-functional and cross-national teams.');
  //locating Reflekt show less button and press on it
  await expect(page.locator('#more8').getByRole('button', { name: 'Load less' })).toBeVisible();
  await page.locator('#more8').getByRole('button', { name: 'Load less' }).click({ force: true });

  // Closing projects container
  await page.waitForTimeout(500); // Short delay for stability
  await expect(page.getByRole('button', { name: 'Load less' })).toBeVisible();
  await page.getByRole('button', { name: 'Load less' }).click({ force: true });

  await page.waitForTimeout(500);
  await loadMoreButton.hover({ force: true });
 
  await expect(page.getByRole('list')).toBeHidden();

});

});

test.describe('SBDigital UI tests', () => {
  test.beforeEach(async ({page}) => {
    
  await page.goto('', { waitUntil: 'networkidle' });
  
})
test('Check the click on Show more button and Testing SBDigital ', async ({ page }) => {
  // Scroll down until the "Load more" button is visible
  while (!(await page.getByRole('button', { name: 'Load more' }).nth(1).isVisible())) {
    await page.evaluate(() => window.scrollBy(0, 1500)); // Scroll down by 1500 pixels
    await page.waitForTimeout(500); // Short wait after scrolling
    await page.evaluate(() => {
      document.querySelectorAll('*').forEach((el) => {
        (el as HTMLElement).style.transition = 'none';
      });
    });
  }

  const loadMoreButton = page.getByRole('button', { name: 'Load more' }).nth(1);
  await loadMoreButton.waitFor({ state: 'visible', timeout: 10000 });

  // Ensure the button is visible and stable before proceeding
  await loadMoreButton.waitFor({ state: 'visible', timeout: 10000 });

  // Disable animations for testing
  await page.evaluate(() => {
    document.querySelectorAll('*').forEach(el => (el as HTMLElement).style.transition = 'none');
  });

  
  // Hover over the button and opening Projects hidden content
  await page.waitForTimeout(500); // Short delay for stability
  await loadMoreButton.hover({ force: true });
  await page.getByRole('button', { name: 'Load more' }).nth(1).click({ force: true });



  //SBDigital titles, pictures and texts are visible
  await expect(page.getByRole('link', { name: 'SBDigital, UAB' })).toBeVisible();
  await expect(page.getByText('Aug 2020 - Mar 2021 Vilnius,')).toBeVisible();
  await expect(page.getByRole('img', { name: 'SBDigital logo' })).toBeVisible();
  await expect(page.locator('#more8')).toContainText('Collaborating with the SBDigital team, contributed to creating a cross-platform browser catered to Muslim users by aggregating essential features. The browser was successfully developed for Android, iOS, OSx, and Windows platforms, offering unique functionalities such as Halal browsing and Azan notifications.');
  //ensuring the list is hidden
  await expect(page.getByRole('list')).toBeHidden();
  //locating the SBDigital load more button and click on it
  await expect(page.locator('#more8 div').filter({ hasText: 'SBDigital, UAB Aug 2020 - Mar 2021 Vilnius, Lithuania, Remote Collaborating' }).getByRole('button')).toBeVisible();
  await page.locator('#more8 div').filter({ hasText: 'SBDigital, UAB Aug 2020 - Mar 2021 Vilnius, Lithuania, Remote Collaborating' }).getByRole('button').click({ force: true });
  //locating ex-hidden list is shown
  await expect(page.getByRole('list')).toBeVisible();
  await expect(page.getByRole('list')).toContainText('Used experience in exploratory testing to find hidden defects and potential usability issues within applications. Applied a strategic and systematic approach, utilizing exploratory testing as a proactive measure to identify unexpected issues, contributing to a more robust and resilient product. Demonstrated proficiency in creating detailed test cases and test suites for both new features and regression testing. Conducted thorough review, analysis, and documentation of test results using tools such as Confluence, Jira, and Google Docs. Used a diverse set of testing environments and devices to validate the consistent performance of applications, contributing to a reliable and uniform user experience. Was a sole QA Engineer on the project');
  //locating SBDigital show less button and press on it
  await expect(page.locator('#more8').getByRole('button', { name: 'Load less' })).toBeVisible();
  await page.locator('#more8').getByRole('button', { name: 'Load less' }).click({ force: true });

  // Closing projects container
  await page.waitForTimeout(500); // Short delay for stability
  await expect(page.getByRole('button', { name: 'Load less' })).toBeVisible();
  await page.getByRole('button', { name: 'Load less' }).click({ force: true });

  await page.waitForTimeout(500);
  await loadMoreButton.hover({ force: true });
 
  await expect(page.getByRole('list')).toBeHidden();

});

});

test.describe('Access Softek UI tests', () => {
  test.beforeEach(async ({page}) => {
    
  await page.goto('', { waitUntil: 'networkidle' });
  
})
test('Check the click on Show more button and Testing Access Softek ', async ({ page }) => {
  // Scroll down until the "Load more" button is visible
  while (!(await page.getByRole('button', { name: 'Load more' }).nth(1).isVisible())) {
    await page.evaluate(() => window.scrollBy(0, 1500)); // Scroll down by 1500 pixels
    await page.waitForTimeout(500); // Short wait after scrolling
    await page.evaluate(() => {
      document.querySelectorAll('*').forEach((el) => {
        (el as HTMLElement).style.transition = 'none';
      });
    });
  }

  const loadMoreButton = page.getByRole('button', { name: 'Load more' }).nth(1);
  await loadMoreButton.waitFor({ state: 'visible', timeout: 10000 });

  // Ensure the button is visible and stable before proceeding
  await loadMoreButton.waitFor({ state: 'visible', timeout: 10000 });

  // Disable animations for testing
  await page.evaluate(() => {
    document.querySelectorAll('*').forEach(el => (el as HTMLElement).style.transition = 'none');
  });

  
  // Hover over the button and opening Projects hidden content
  await page.waitForTimeout(500); // Short delay for stability
  await loadMoreButton.hover({ force: true });
  await page.getByRole('button', { name: 'Load more' }).nth(1).click({ force: true });



  //Access Softek titles, pictures and texts are visible
  await expect(page.getByRole('link', { name: 'Access Softek' })).toBeVisible();
  await expect(page.getByText('Oct 2016 - Apr 2020')).toBeVisible();
  await expect(page.getByRole('img', { name: 'Access Softek logo' })).toBeVisible();
  await expect(page.locator('#more8')).toContainText('While working at Access Softek, progressed from a Junior Software Quality Assurance Engineer to a Middle Software Quality Assurance Engineer and Scrum Master. As a team member, actively contributed to the testing of a digital banking application suite. Which contained an administrative interface and user-centric web and mobile apps. One of the key features of this suite was transfers through an intuitive three-column screen. Users only needed to specify the destination, source, and optional recurrence for a seamless experience. Conducted manual testing of web and mobile applications. Executed Record and Replay automation test suits using Selenium Web Driver. Created detailed test documentation, and managed the whole cycle of bug reporting using Jira.');
  //ensuring the list is hidden
  await expect(page.getByRole('list')).toBeHidden();
  //locating the Access Softek load more button and click on it
  await expect(page.locator('#more8 div').filter({ hasText: 'Access Softek Oct 2016 - Apr 2020 California, US, Remote While working at' }).getByRole('button')).toBeVisible();
  await page.locator('#more8 div').filter({ hasText: 'Access Softek Oct 2016 - Apr 2020 California, US, Remote While working at' }).getByRole('button').click({ force: true });
  //locating ex-hidden list is shown
  await expect(page.getByRole('list')).toBeVisible();
  await expect(page.getByRole('list')).toContainText('Sprint Planning activities (creating Sprint Plan & discussing it with the team, Sprint Check-in meeting participation). Scheduling & holding Team Meetings (daily, retro, demo). Providing help with process organization for the QA Team lead. Helping with regression planning by providing QA availability information for the regression coordinator. Exploratory testing of applications, based on experience. Test documentation creation (detailed test cases, test suits) for new features & regression test documentation updating. Review, analyze and document test results and metrics (work with CF, Jira, google-docs). Testing ADA implementation & compatibility of the product on desktop & mobile devices');
  //locating Access Softek show less button and press on it
  await expect(page.locator('#more8').getByRole('button', { name: 'Load less' })).toBeVisible();
  await page.locator('#more8').getByRole('button', { name: 'Load less' }).click({ force: true });

  // Closing projects container
  await page.waitForTimeout(500); // Short delay for stability
  await expect(page.getByRole('button', { name: 'Load less' })).toBeVisible();
  await page.getByRole('button', { name: 'Load less' }).click({ force: true });

  await page.waitForTimeout(500);
  await loadMoreButton.hover({ force: true });
 
  await expect(page.getByRole('list')).toBeHidden();

});

});
