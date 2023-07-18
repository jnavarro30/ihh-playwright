import { test, expect } from "@playwright/test";

// test.describe("launch items", () => {
//   test("sign in, start now, learn more and free camera offer buttons are visible", async ({
//     page,
//   }) => {
//     await page.goto("https://tv.independa.com/launch?device_id=PROD&tv=lg");
//     await expect(page.locator("text=Sign In")).toBeVisible();
//     await expect(page.locator("text=Start Now")).toBeVisible();
//     await expect(page.locator("text=Learn More")).toBeVisible();
//     await expect(page.locator("text=/^FREE .+/")).toBeVisible();
//   });
// });

// test.describe("sign in", () => {
//   test("redirect from launch screen to sign in", async ({
//     page,
//   }) => {
//     await page.goto("https://tv.independa.com/launch?device_id=PROD&tv=lg");
//     const signIn = page.locator("text=Sign In");
//     await expect(signIn).toBeVisible();
//     await signIn.click();

//     await page.waitForURL("https://tv.independa.com/launch/sign-in-form");
//     await expect(page.locator("text=Your email is required")).toBeVisible();
//     await expect(page).toHaveURL(/.+sign-in-form/);

//     await page.locator("input").fill("jesse.nvrro@gmail.com");
//     await expect(page.locator("text=Continue")).toBeVisible();

//     // Integrate when we can verify through playwright
//     // await page.locator("text=Continue").click();
//     // await page.waitForURL("https://tv.independa.com/?device_id=PROD&tv=lg");
//     // await expect(page.locator("text=Good morning")).toBeVisible();
//   });
// });

// test.describe("start now", () => {
//   test("redirect to start now", async({page}) => {
//     await page.goto("https://tv.independa.com/launch?device_id=PROD&tv=lg");
//     const startNow = page.locator("text=Start Now");
//     await expect(startNow).toBeVisible();
//     await startNow.click();

//     await page.waitForURL("https://tv.independa.com/?tv=lg&device_id=PROD");
//     await expect(page.locator("text=Good")).toBeVisible();
//     await expect(page).toHaveURL(/.+tv=lg&device_id=PROD$/);
//   })
// })

test.describe("learn more", () => {
  // test("redirect to learn more", async({page}) => {
  //   await page.goto("https://tv.independa.com/launch?device_id=PROD&tv");
  //   await page.locator("text=Learn More").click();

  //   // https://tv.independa.com/launch/learn-more?device_id=PROD&tv
  //   await page.waitForURL(/.+learn-more.+/);
  //   await expect(page.locator("text=Enjoy FREE")).toBeVisible();
  // })

  test("redirect to home page", async({ page } ) => {
    await page.goto("https://tv.independa.com/launch/learn-more?device_id=PROD&tv");
    await page.locator("text=Enjoy FREE").click();

    await page.waitForURL("/.+tv=lg&device_id=PROD/");
    await expect(page.locator("text=Today is")).toBeVisible();
  })
})

