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
    expect(await page.title()).toBe("Electric Fleets - Zenobē");
  });

  test("should have a visible hero image", async () => {
    const heroImage = await page.waitForSelector(
      "//img[@src='https://www.zenobe.com/wp-content/uploads/2022/06/2022-04-13_Zenobe_1044-1024x683.jpg']"
    );
    expect(await heroImage.isVisible()).toBe(true);
  });

  test('should have a visible "Power procurement" section', async () => {
    const section = await page.waitForSelector(
      "//h2[contains(text(),'Power procurement')]"
    );
    expect(await section.isVisible()).toBe(true);
  });

  test('should have a visible "Minimising upfront costs" section', async () => {
    const section = await page.waitForSelector(
      "//h2[contains(text(),'Minimising upfront costs')]"
    );
    expect(await section.isVisible()).toBe(true);
  });
});
