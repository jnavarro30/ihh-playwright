import { test, expect, beforeEach } from "@playwright/test";
import User from "../../../config/users";

const user = new User("Andrew", "1222222222", "22222");
const { mobile, otp } = user;

test.describe("Photos", () => {
  beforeEach(async ({ page }) => {
    await page.goto(user.signedInUrl());
    let connectionsBanner = await page.getByText(
      "Video CallsPhotosMessagesAudio ClipsVideo Clips"
    );
    await connectionsBanner.click();
  });

  test("redirect to photos", async ({ page }) => {
    let url =
      "https://tv.independa.com/s/featured-free/photos?from=home_social";
    await page.getByText("Photos").click();
    await page.waitForURL(url);
    expect(page.url()).toBe(url);
  });

  test("open first photo", async ({ page }) => {
    await page.getByText("Photos").click();
    await page
      .locator("div")
      .filter({ hasText: /^Jun 11, 2025 11:35 PMJesse Navarro$/ })
      .getByRole("img")
      .click();
    await page.getByText("Test photo").click();
    expect(page.getByText("Test photo").first()).toBeAttached;
  });
});