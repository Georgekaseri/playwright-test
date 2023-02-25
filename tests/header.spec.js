import { chromium } from "@playwright/test";
import { test, expect } from "@playwright/test";

test.describe("Verify Zenobe header", () => {
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

  test('should have a visible "Electric Fleets" menu item', async () => {
    const solutionsLink = await page.waitForSelector(
      "//a[text()='Electric Fleets']"
    );
    expect(await solutionsLink.isVisible()).toBe(true);
  });

  test('should have a visible "Network Infrastructure" menu item', async () => {
    const projectsLink = await page.waitForSelector(
      "//a[text()='Network Infrastructure']"
    );
    expect(await projectsLink.isVisible()).toBe(true);
  });

  test('should have a visible "Second-life Batteries" menu item', async () => {
    const aboutLink = await page.waitForSelector(
      "//a[text()='Second-life Batteries']"
    );
    expect(await aboutLink.isVisible()).toBe(true);
  });

  test('should have a visible "Our Storys" menu item', async () => {
    const newsLink = await page.waitForSelector(
      "//a[@href='https://www.zenobe.com/our-story/']"
    );
    expect(await newsLink.isVisible()).toBe(true);
  });
});
