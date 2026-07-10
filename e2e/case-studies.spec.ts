import { expect, test } from "@playwright/test";
import { HomePage } from "./pages/HomePage";

const allCaseStudies = [
  { slug: "quality-infrastructure", title: "Quality ownership across 100+ distributed components" },
  { slug: "rag-test-generation", title: "RAG-based test generation for deterministic scenario authoring" },
  { slug: "ui-modernization", title: "Playwright-based UI automation for modern platform workflows" },
  { slug: "automation-architecture", title: "Backend and API automation for distributed financial workflows" },
  { slug: "reliability-engineering", title: "Chaos-style resilience validation for async platform services" },
  { slug: "performance", title: "Standalone performance testing rebuilt into a reproducible model" },
  { slug: "failure-analysis", title: "Structured RCA with LLM-assisted triage" },
];

test.describe("case study modal", () => {
  test("the grid renders all seven case study cards", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();

    await expect(home.caseStudies.cards).toHaveCount(allCaseStudies.length);
  });

  for (const { slug, title } of allCaseStudies) {
    test(`opening ?case=${slug} shows its own title and a real visual, not the fallback`, async ({ page }) => {
      const home = new HomePage(page);
      await home.caseStudies.openBySlug(slug);

      await expect(home.caseStudies.dialog).toBeVisible();
      await expect(home.caseStudies.dialogHeading(title)).toBeVisible();
      await expect(home.caseStudies.fallbackText).toBeHidden();
    });
  }

  test("an unknown ?case= value leaves the page in its normal, closed state", async ({ page }) => {
    const home = new HomePage(page);
    await home.caseStudies.openBySlug("does-not-exist");

    await expect(home.caseStudies.dialog).toBeHidden();
    await expect(home.heading).toBeVisible();
  });

  test("clicking the backdrop closes the modal", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    const home = new HomePage(page);
    await home.caseStudies.openBySlug("quality-infrastructure");

    await expect(home.caseStudies.dialog).toBeVisible();
    await home.caseStudies.closeViaBackdrop();

    await expect(home.caseStudies.dialog).toBeHidden();
    await expect(page).not.toHaveURL(/[?&]case=/);
  });

  test("opening a case study updates the URL and traps focus", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();

    await home.caseStudies.openFirst();

    await expect(page).toHaveURL(/[?&]case=/);
    await expect(home.caseStudies.dialog).toBeVisible();
    await expect(home.caseStudies.closeButton).toBeFocused();
  });

  test("Escape closes the modal and clears the URL param", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.caseStudies.openFirst();
    await expect(home.caseStudies.dialog).toBeVisible();

    await home.caseStudies.closeViaEscape();

    await expect(home.caseStudies.dialog).toBeHidden();
    await expect(page).not.toHaveURL(/[?&]case=/);
  });

  test("close button returns focus to the triggering card", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    const firstCard = home.caseStudies.card(0);
    await firstCard.click();

    await home.caseStudies.close();
    await expect(home.caseStudies.dialog).toBeHidden();
    await expect(firstCard).toBeFocused();
  });
});
