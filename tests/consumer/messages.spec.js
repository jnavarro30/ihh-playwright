import { test, expect } from "@playwright/test";
import User from "../../config/users";

const user = new User("Andrew", "1222222222", "22222");
const { mobile, otp } = user;

test.describe("Messages", () => {
  test("redirect to messages", async ({ page }) => {
    await page.goto(user.signedInUrl());
    await page.getByText('Messages').first().click();
    await page.waitForTimeout(3000);
    expect(page.url()).toBe('https://tv.independa.com/s/featured-free/messages?from=home_social');
  });
});
