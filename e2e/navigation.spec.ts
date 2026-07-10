import { expect, test } from "@playwright/test";
import { HomePage } from "./pages/HomePage";

test.describe("navigation", () => {
  test("home page loads with the expected name and title", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();

    await expect(page).toHaveTitle(/Gaurav Dhingra/);
    await expect(home.heading).toContainText("AI-assisted quality systems");
  });

  test("desktop nav anchors resolve to their sections", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    const home = new HomePage(page);
    await home.goto();

    for (const [label, sectionId] of [
      ["Systems", "systems"],
      ["Work", "work"],
      ["Contact", "contact"],
    ] as const) {
      await home.nav.clickLink(label);
      await expect(page.locator(`#${sectionId}`)).toBeInViewport();
    }
  });

  test("mobile nav menu opens and links close it", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    const home = new HomePage(page);
    await home.goto();

    await home.nav.openMobileMenu();
    await expect(home.nav.mobilePanel).toBeVisible();

    await home.nav.mobileLink("Contact").click();
    await expect(home.nav.mobilePanel).toBeHidden();
    await expect(page.locator("#contact")).toBeInViewport();
  });

  test("resume link resolves to a real file", async ({ page, request }) => {
    const home = new HomePage(page);
    await home.goto();

    const resumeHref = await home.resumeLink.getAttribute("href");
    expect(resumeHref).toBeTruthy();

    const response = await request.get(resumeHref!);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("application/pdf");
  });

  test("contact links point to the right destinations", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();

    await expect(home.mailtoLinks).toHaveCount(2);
    await expect(home.linkedinLink).toHaveCount(1);
    await expect(home.githubLink).toHaveCount(1);
  });
});
