import { test, expect, beforeEach } from "@playwright/test";
import User from "../../../config/users";

const user = new User("Andrew", "1222222222", "22222");

test.describe("Community Calendar", () => {
  beforeEach(async ({ page }) => {
    await page.goto(user.signedInUrl());
    await page.getByText('Community').first().click();
    await page.getByText('Community Calendar').click();
  });

  test("redirect to community calendar", async ({ page }) => {
    let url =
      "https://tv.independa.com/s/community/calendar-type";
    await page.waitForURL(url);
    expect(page.url()).toBe(url);
  });

  test("find open gym in Independent Living", async ({ page }) => {
    await page.getByText('Independent Living').click();
    await page.getByText('01Open GYM').click();
    expect(page.getByRole('row', { name: 'Name Open GYM' }).locator('div').nth(2)).toBeAttached;
  });

  test("find assistance hour in Assisted Living", async ({ page }) => {
    await page.getByText('Assisted Living').click();
    await page.getByText('01Assistance Hour!').click();
    expect(page.getByRole('row', { name: 'Name Assistance Hour!' }).locator('div').nth(2)).toBeAttached;
  });
});
