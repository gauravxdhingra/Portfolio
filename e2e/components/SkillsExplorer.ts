import type { Page } from "@playwright/test";

export class SkillsExplorer {
  constructor(private readonly page: Page) {}

  get tablist() {
    return this.page.getByRole("tablist", { name: "Skill groups" });
  }

  tab(name: string) {
    return this.tablist.getByRole("tab", { name });
  }

  async selectTab(name: string) {
    await this.tab(name).click();
  }

  get panel() {
    return this.page.getByRole("tabpanel");
  }

  item(name: string) {
    return this.panel.getByText(name, { exact: true });
  }

  get showMoreButton() {
    return this.panel.getByRole("button", { name: /Show \d+ more/ });
  }

  get showLessButton() {
    return this.panel.getByRole("button", { name: "Show less" });
  }

  async expand() {
    await this.showMoreButton.click();
  }
}
