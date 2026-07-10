import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { HomePage } from "./pages/HomePage";

test.describe("accessibility", () => {
  test("home page has no automatically detectable a11y violations", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();

    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });

  test("open case study dialog has no automatically detectable a11y violations", async ({ page }) => {
    const home = new HomePage(page);
    await home.caseStudies.openBySlug("quality-infrastructure");
    await expect(home.caseStudies.dialog).toBeVisible();

    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
});
