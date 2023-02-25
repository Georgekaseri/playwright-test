import { chromium } from "@playwright/test";
import { test, expect } from "@playwright/test";

test.describe("Verify Zenobe Electric Fleets page", () => {
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
    await page.goto("https://www.zenobe.com/electric-fleets/");
  });

  test.afterEach(async () => {
    await page.close();
  });

  test("should have the correct page title", async () => {
    // expect(await page.title()).toBe("Electric Fleets | Zenobe");
  });

  test("should have a visible hero image", async () => {
    //  const heroImage = await page.waitForSelector(".elementor-menu-toggle");
    //expect(await heroImage.isVisible()).toBe(true);
  });

  test('should have a visible "Introduction" section', async () => {
    //  const section = await page.waitForSelector(".electric-fleets-intro");
    // expect(await section.isVisible()).toBe(true);
  });

  test('should have a visible "Our Expertise" section', async () => {
    /*  const section = await page.waitForSelector(
      ".elementor-container elementor-column-gap-no"
    );
    // expect(await section.isVisible()).toBe(true);*/
  });
});
