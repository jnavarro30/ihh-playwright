import { test, expect } from "@playwright/test";
import User from "../config/users";

const user = new User("Andrew", '1222222222', '22222');
const { mobile, otp } = user;

test.describe("sign in", () => {
//   test("sign in exists", async ({ page }) => {
//     await page.goto(user.url());
//     const signIn = page.locator("text=Sign In");

//     await expect(signIn).toBeAttached();
//   });

  test("test", async ({ page }) => {
    await page.goto(user.signedInUrl());
    // await page.getByText("Sign In").click();
    // await page.locator("#phone").fill(mobile);
    // await page.getByText("Continue").click();
    // await page.locator("#otpField").fill(otp);
    await page.waitForTimeout(3000);
    expect(page.getByText("Good afternoon, Andrew R!")).toBeAttached;
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
