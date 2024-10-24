import { test, expect } from '@playwright/test';
import assert from 'assert';
import { only } from 'node:test';
import { json } from 'stream/consumers';

test('/wp-content/uploads/', async ({ page }) => {
  await page.goto('./wp-content/uploads/');

  // Expect the /wp-content/uploads/ folder is hidden.
  await expect(page).not.toHaveTitle(/uploads/);
});

test('/wp-content/uploads/wpforms/', async ({ page }) => {
  await page.goto('./wp-content/uploads/wpforms/');

  // Expect the /wp-content/uploads/wpforms/ folder is hidden.
  await expect(page).not.toHaveTitle(/wpforms/);
  await page.getByText('404').allInnerTexts();

});

test('/wp-includes', async ({ page }) => {
  await page.goto('./wp-includes');

  // Expect the /wp-includes/ folder is hidden.
  await expect(page).not.toHaveTitle('');
});

test('/wp-config.php', async ({ page }) => {
  await page.goto('./wp-config.php');

  // // Expect the /wp-config.php file is hidden.
  const headTextWpConf= 'Internal Server Error';
  // await expect(page).not.toHaveTitle('500 Internal Server Error');
  // await page.getByText(headTextWpConf, {exact: true}).allInnerTexts();
  await expect (page.getByText(headTextWpConf, {exact: true})).not.toBeVisible();
  // expect a text is not displayed.
  // const headTextWpConf= '500 Internal Server Error';
  // await expect (page.getByText(headTextWpConf)).not.toBeVisible();
});

test('/wp-links-opml.php', async ({ page }) => {
  await page.goto('./wp-links-opml.php');

  // Expect the /wp-links-opml.php file is hidden.
  await expect(page).not.toHaveTitle(/''/);
  // expect a text is not displayed.
  const headText= 'This XML file does not appear to have any style information associated with it. The document tree is shown below.';
  await expect (page.getByText(headText, {exact: true})).not.toBeVisible();
});

test('wp-trackback.php', async ({ page }) => {
  await page.goto('./wp-trackback.php');

  // Expect the wp-trackback.php file is hidden.
  const responseMessage= "I really need an ID for this to work.";
  await expect(page).not.toHaveTitle('');
  await expect (page.getByText(responseMessage, {exact: true})).not.toBeVisible();

});

test('/xmlrpc.php', async ({ page }) => {
  await page.goto('./xmlrpc.php');

  // Expect the /xmlrpc.php file is hidden.
  const xmlIssue= 'XML-RPC server accepts POST requests only.';
  await expect(page).not.toHaveTitle('');
  await expect (page.getByText(xmlIssue, {exact: true})).not.toBeVisible();
  await page.getByText('404').allInnerTexts();
  

});

test('/wp-load.php', async ({ page }) => {
  await page.goto('./wp-load.php');

  // Expect the /wp-load.php file is hidden.
  //const xmlIssue= 'XML-RPC server accepts POST requests only.';
  await expect(page).not.toHaveTitle('');
  await page.getByText('404').allInnerTexts();
    //await expect (page.getByText(xmlIssue, {exact: true})).not.toBeVisible();

});

test('/wp-settings.php', async ({ page }) => {
  await page.goto('./wp-settings.php');

  // Expect the /wp-settings.php file is hidden.
  await expect(page).not.toHaveTitle('');
  await page.getByText('404').allInnerTexts();

});

test('/readme.html', async ({ page }) => {
  await page.goto('./readme.html');

  // Expect the /readme.html file is hidden.
  const responseText= "Semantic Personal Publishing Platform";
  await expect (page.getByText(responseText, {exact: true})).not.toBeVisible();

});

test('/wp-cron.php', async ({ page }) => {
  await page.goto('./wp-cron.php');

  // Expect the /readme.html file is hidden.
  await expect(page).not.toHaveTitle('');
  await page.getByText('404').allInnerTexts();

});

test('/wp-content/plugins/social-warfare/', async ({ page }) => {
  await page.goto('./wp-content/plugins/social-warfare/');

  // Expect the /wp-content/plugins/social-warfare/ folder isn't exists.
  await expect(page).not.toHaveTitle('');
  await page.getByText('404').allInnerTexts();

});

test('/wp-content/plugins/themes/twentytwenty/', async ({ page }) => {
  await page.goto('./wp-content/plugins/themes/twentytwenty/');

  // Expect the //wp-content/plugins/themes/twentytwenty/ HARMFUL theme isn't exists.
  await expect(page).not.toHaveTitle('');
  await page.getByText('404').allInnerTexts();

});


test('/wp-admin/install.php', async ({ page }) => {
  await page.goto('./wp-admin/install.php');

  // Expect the /wp-admin/install.php file isn't exists.
  const responseText= "Already Installed";
  await expect (page.getByText(responseText, {exact: true})).not.toBeVisible();
  await page.getByText('404').allInnerTexts();

});


test('/wp-admin/readme.html', async ({ page }) => {
  await page.goto('./wp-admin/readme.html');

  // Expect the /wp-admin/install.php file isn't exists.
    await page.getByText('404').allInnerTexts();
});

// test('/wp-json', async ({ page }) => {
//   await page.goto('./wp-json');

// // NEED TO UPDATE THE TEST IT IS NOT RELAYABLE!!!


//   // Expect the /wp-json file isn't acceceble.
//     // await page.getByText('404').allInnerTexts();
//     const responseText= "You are not currently logged in";
//     const responseText1= "description";
//     await page.getByText(responseText).allInnerTexts();
//     await expect (page.getByText(responseText1, {exact: true})).not.toBeVisible();
//     //await page.getByText('You are not currently logged in').allInnerTexts();
// });


test('/hello-world/', async ({ page }) => {
  await page.goto('./hello-world/');

  // Expect the /hello-world/ page isn't exists.
    await page.getByText('404').allInnerTexts();
    await expect (page.getByText('Hello world!', {exact: true})).not.toBeVisible();
});



test('API response ./wp-json/wp/v2/users/ should not contain the word "description"', async ({ request }) => {
  // Send a GET request to the API endpoint
  const response = await request.get('./wp-json/wp/v2/users/');

  // Ensure the request was successful
  expect(response.status()).toBe(200);

  // Parse the JSON response
  const responseBody = await response.json();

  // Convert the JSON response to a string
  const responseBodyString = JSON.stringify(responseBody);

  // Check that the response body does not contain the word "description"
  expect(responseBodyString).not.toContain('description');
});


test('API response ./wp-json should not contain the word "description"', async ({ request }) => {
  // Send a GET request to the API endpoint
  const response = await request.get('./wp-json');

  // Ensure the request was successful
  expect(response.status()).toBe(200);

  // Parse the JSON response
  const responseBody = await response.json();

  // Convert the JSON response to a string
  const responseBodyString = JSON.stringify(responseBody);

  // Check that the response body does not contain the word "description"
  expect(responseBodyString).not.toContain('description');
});

test('API response /xmlrpc.php should not contain the word "Hello"', async ({ request }) => {
  // Define the XML payload
  const xmlPayload = `
    <methodCall>
      <methodName>demo.sayHello</methodName>
      <params></params>
    </methodCall>
  `;

  // Send a POST request with the XML payload
  const response = await request.post('./xmlrpc.php', {
    headers: {
      'Content-Type': 'application/xml'
    },
    data: xmlPayload
  });

  // Ensure the request was successful
  expect(response.status()).toBe(200);

  // Get the response body as text
  const responseBody = await response.text();

  // Check that the response body does not contain the word "Hello"
  expect(responseBody).not.toContain('Hello');
});

test('API response /xmlrpc.php should not contain the word "methodResponse"', async ({ request }) => {
  // Define the XML payload
  const xmlPayload = `
    <methodCall>
<methodName>system.listMethods</methodName>
<params></params>
</methodCall>
  `;

  // Send a POST request with the XML payload
  const response = await request.post('./xmlrpc.php', {
    headers: {
      'Content-Type': 'application/xml'
    },
    data: xmlPayload
  });

  // Ensure the request was successful
  expect(response.status()).toBe(200);

  // Get the response body as text
  const responseBody = await response.text();

  // Check that the response body does not contain the word "methodResponse"
  expect(responseBody).not.toContain('methodResponse');
});


