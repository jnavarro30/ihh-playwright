import { test, expect, beforeEach } from "@playwright/test";
import User from "../../../config/users";

const user = new User("Andrew", "1222222222", "22222");
const { mobile, otp } = user;

test.describe("Audio Clips", () => {
  beforeEach(async ({ page }) => {
    await page.goto(user.signedInUrl());
    let connectionsBanner = await page.getByText(
      "Video CallsPhotosMessagesAudio ClipsVideo Clips"
    );
    await connectionsBanner.click();
  });

  test("redirect to audio clips", async ({ page }) => {
    let url =
      "https://tv.independa.com/s/featured-free/audio-clips?from=home_social";
    await page.getByText('Audio Clips').click();
    await page.waitForURL(url);
    expect(page.url()).toBe(url);
  });

  test("open first audio clip", async ({ page }) => {
    await page.getByText('Audio Clips').click();
    await page.getByText('Test audio').click();
    expect(page.getByText('Test audio00:00:')).toBeAttached;
  });
});
