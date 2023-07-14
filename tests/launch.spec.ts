import { test, expect } from "@playwright/test";

test.describe("sign in", () => {

  test("sign in exists", async ({ page }) => {
    await page.goto("https://tv.independa.com/launch?device_id=PROD");
    const signIn = page.locator("text=Sign In");

    await expect(signIn).toBeAttached();
  });

//   test("redirect to sign in page", async ({page}) => {
//     await page.goto("https://tv.independa.com/launch?device_id=PROD");
//     const signIn = page.locator("text=Sign In");

//     await signIn.click();
//   })

//   test("sign in", async({ page }) => {
//     await page.goto("https://tv.independa.com/launch/sign-in-form");
//     const emailInput = page.locator("id=0");

//     await emailInput.fill("jesse.nvrro@gmail.com");

//     expect("1").toBe("1");
//   })
});


// test.afterAll(async () => {
//     console.log('Done with tests');
//     // ...
//     // sign out
//   });

// toHaveAttribute('class', 'text or regular expressions')

// test("has title", async ({ page }) => {
//   await page.goto(tvUrl);
//   await expect(page).toHaveTitle(/Independa/);
// });

// test("sign in", async ({ page }) => {
//   await page.goto(tvUrl);
//   const signIn = page.locator("text=Sign In");

//   await expect(signIn).toBeAttached();
// });

// test("start now button", async ({ page }) => {
//   await page.goto(tvUrl);

//   const startNow = page.locator("text=Start Now");

//   await expect(startNow).toBeAttached();
// });
