import { test, expect, beforeEach } from "@playwright/test";
import User from "../../../config/users";

const user = new User("Andrew", "1222222222", "22222");

test.describe("Community Calendar", () => {
  beforeEach(async ({ page }) => {
    await page.goto(user.signedInUrl());
    await page.getByText('Community').first().click();
    await page.getByText('Calendar').click();
  });

  test("redirect to community calendar", async ({ page }) => {
    let url =
      "https://tv.independa.com/s/community/v3/calendar";
    await page.waitForURL(url);
    expect(page.url()).toBe(url);
  });

  test("personal and community selectors", async ({ page }) => {
    await expect(page.getByText('Personal')).toBeVisible();
    await expect(page.getByText('Community')).toBeVisible();
  });
});
