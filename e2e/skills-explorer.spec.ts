import { expect, test } from "@playwright/test";
import { HomePage } from "./pages/HomePage";

test.describe("skills explorer", () => {
  test("defaults to the first group and switches on tab click", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();

    const languagesTab = home.skills.tab("Programming Languages");
    await expect(languagesTab).toHaveAttribute("aria-selected", "true");
    await expect(home.skills.panel).toContainText("Java");

    const backendTab = home.skills.tab("Backend & API");
    await home.skills.selectTab("Backend & API");

    await expect(backendTab).toHaveAttribute("aria-selected", "true");
    await expect(languagesTab).toHaveAttribute("aria-selected", "false");
    await expect(home.skills.panel).toContainText("Kafka");
  });

  test("long lists collapse by default and expand on demand", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();

    await home.skills.selectTab("FinTech");

    await expect(home.skills.item("Treasury Management System (TMS)")).toBeVisible();
    await expect(home.skills.item("Payment Messaging")).toBeHidden();

    await home.skills.expand();

    await expect(home.skills.item("Payment Messaging")).toBeVisible();
    await expect(home.skills.showLessButton).toBeVisible();
  });

  test("switching tabs resets the expanded state", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();

    await home.skills.selectTab("FinTech");
    await home.skills.expand();
    await expect(home.skills.item("Payment Messaging")).toBeVisible();

    await home.skills.selectTab("Programming Languages");
    await home.skills.selectTab("FinTech");

    await expect(home.skills.item("Payment Messaging")).toBeHidden();
    await expect(home.skills.showMoreButton).toBeVisible();
  });
});
