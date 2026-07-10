import type { Page } from "@playwright/test";

export class CaseStudies {
  constructor(private readonly page: Page) {}

  get cards() {
    return this.page.getByRole("button", { name: /Details/ });
  }

  card(index: number) {
    return this.cards.nth(index);
  }

  async openFirst() {
    await this.cards.first().click();
  }

  async openBySlug(slug: string) {
    await this.page.goto(`/?case=${slug}`);
  }

  get dialog() {
    return this.page.getByRole("dialog");
  }

  get closeButton() {
    return this.dialog.getByRole("button", { name: "Close details" });
  }

  async close() {
    await this.closeButton.click();
  }

  async closeViaEscape() {
    await this.page.keyboard.press("Escape");
  }

  async closeViaBackdrop() {
    await this.dialog.click({ position: { x: 10, y: 10 } });
  }

  dialogHeading(name: string | RegExp) {
    return this.dialog.getByRole("heading", { name });
  }

  get fallbackText() {
    return this.dialog.getByText("Execution snapshot available in the case study details.");
  }
}
