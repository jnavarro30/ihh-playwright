import { test, expect, beforeEach } from "@playwright/test";
import User from "../../../config/users";

const user = new User("Andrew", "1222222222", "22222");

test.describe("Surveys", () => {
  beforeEach(async ({ page }) => {
    await page.goto(user.signedInUrl());
    await page.getByText('Community').first().click();
    await page.getByText('Surveys').click();
  });

  test("redirect to surveys", async ({ page }) => {
    let url =
      "https://tv.independa.com/s/community/survey-name";
    await page.waitForURL(url);
    expect(page.url()).toBe(url);
  });

  test("find unstarted survey options", async ({ page }) => {
    await page.getByText('Fruits and Vegetables', { exact: true }).click();
    expect(page.locator('div').filter({ hasText: /^AYes$/ }).nth(1)).toBeVisible;
  });

  test("find completed survey message", async ({ page }) => {
    await page.getByText('Movie Collection', { exact: true }).click();
    expect(page.getByText('Thank you!')).toBeVisible;
    expect(page.getByText('Progress: Survey Completed')).toBeVisible;
  });
});