import { test, expect, beforeEach } from "@playwright/test";
import User from "../../../config/users";

const user = new User("Andrew", "1222222222", "22222");
const { mobile, otp } = user;

test.describe("Messages", () => {
  beforeEach(async ({ page }) => {
    await page.goto(user.signedInUrl());
    let connectionsBanner = await page.getByText(
      "Video CallsPhotosMessagesAudio ClipsVideo Clips"
    );
    await connectionsBanner.click();
  });

  test("redirect to messages", async ({ page }) => {
    let url =
      "https://tv.independa.com/s/featured-free/messages?from=home_social";
    await page.getByText("Messages").click();
    await page.waitForURL(url);
    expect(page.url()).toBe(url);
  });

  test("open first message", async ({ page }) => {
    await page.getByText("Messages").click();
    await page.getByText("Test message").click();
    expect(page.getByText("Test message").first()).toBeVisible();
  });
});
