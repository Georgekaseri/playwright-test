import { chromium } from "@playwright/test";
import { test, expect } from "@playwright/test";
test.describe("Verify Zenobe home page", () => {
  let browser;
  let page;

  test.beforeAll(async () => {
    browser = await chromium.launch();
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test.beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://www.zenobe.com/");
  });

  test.afterEach(async () => {
    await page.close();
  });

  test("should have the correct title", async () => {
    expect(await page.title()).toBe("Zenobe | Discover Zenobe");
  });

  test("should have a visible logo", async () => {
    const logo = await page.waitForSelector("#elementor-device-mode");
    expect(await logo.isVisible()).toBe(true);
  });

  test("should have a visible navigation menu", async () => {
    const menu = await page.waitForSelector(".elementor-icon");
    expect(await menu.isVisible()).toBe(true);
  });

  test("should have a visible call to action button", async () => {
    const button = await page.waitForSelector(".elementor-nav-menu");
    expect(await button.isVisible()).toBe(true);
  });

  test("should have a visible footer", async () => {
    const footer = await page.waitForSelector("#elementor-device-mode");
    expect(await footer.isVisible()).toBe(true);
  });
});
