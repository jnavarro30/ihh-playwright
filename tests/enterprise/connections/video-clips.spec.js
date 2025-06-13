import { test, expect, beforeEach } from "@playwright/test";
import User from "../../../config/users";

const user = new User("Andrew", "1222222222", "22222");
const { mobile, otp } = user;

test.describe("Video Clips", () => {
  beforeEach(async ({ page }) => {
    await page.goto(user.signedInUrl());
    let connectionsBanner = await page.getByText(
      "Video CallsPhotosMessagesAudio ClipsVideo Clips"
    );
    await connectionsBanner.click();
  });

  test("redirect to video clips", async ({ page }) => {
    let url =
      "https://tv.independa.com/s/featured-free/video-clips?from=home_social";
    await page.getByText('Video Clips').click();
    await page.waitForURL(url);
    expect(page.url()).toBe(url);
  });

  test("open first video clip", async ({ page }) => {
    await page.getByText('Video Clips').click();
    await page.locator('div').filter({ hasText: /^Jun 11, 2025 11:37 PMJesse Navarro$/ }).getByRole('img').click();
    expect(page.getByText('Test video')).toBeVisible();
  });
});
