import type { Page } from "@playwright/test";

export class Navigation {
  constructor(private readonly page: Page) {}

  get root() {
    return this.page.getByRole("navigation");
  }

  link(label: string) {
    return this.root.getByRole("link", { name: label, exact: true });
  }

  async clickLink(label: string) {
    await this.link(label).click();
  }

  get mobileMenuButton() {
    return this.page.getByRole("button", { name: /open menu/i });
  }

  get mobilePanel() {
    return this.page.locator("#mobile-nav-panel");
  }

  async openMobileMenu() {
    await this.mobileMenuButton.click();
  }

  mobileLink(label: string) {
    return this.mobilePanel.getByRole("link", { name: label });
  }
}
