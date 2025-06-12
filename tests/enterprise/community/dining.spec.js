import { test, expect, beforeEach } from "@playwright/test";
import User from "../../../config/users";

const user = new User("Andrew", "1222222222", "22222");

test.describe("Dining", () => {
  beforeEach(async ({ page }) => {
    await page.goto(user.signedInUrl());
    await page.getByText('Community').first().click();
    await page.getByText('Dining').click();
  });

  test("redirect to dining", async ({ page }) => {
    let url =
      "https://tv.independa.com/s/community/menus-venue";
    await page.waitForURL(url);
    expect(page.url()).toBe(url);
  });

  test("find first menu items for breakfast, brunch, lunch, dinner and all day", async ({ page }) => {
    await page.getByText('Kinder\'s Kitchen').click();
    await page.getByText('BREAKFAST', { exact: true }).hover();
    expect(page.getByText('Avocado Toast')).toBeVisible();
    await page.getByText('BRUNCH').hover();
    expect(page.getByText('Eggs Benedict')).toBeVisible();
    await page.getByText('LUNCH').hover();
    expect(page.getByText('Burrito Bowl')).toBeVisible();
    await page.getByText('DINNER').hover();
    expect(page.getByText('Beef Tacos')).toBeVisible();
    await page.getByText('ALL DAY').hover();
    expect(page.getByText('Smoothies')).toBeVisible();
  });
});
