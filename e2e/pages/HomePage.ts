import type { Page } from "@playwright/test";
import { Navigation } from "../components/Navigation";
import { SkillsExplorer } from "../components/SkillsExplorer";
import { CaseStudies } from "../components/CaseStudies";

export class HomePage {
  readonly nav: Navigation;
  readonly skills: SkillsExplorer;
  readonly caseStudies: CaseStudies;

  constructor(private readonly page: Page) {
    this.nav = new Navigation(page);
    this.skills = new SkillsExplorer(page);
    this.caseStudies = new CaseStudies(page);
  }

  async goto() {
    await this.page.goto("/");
  }

  get heading() {
    return this.page.getByRole("heading", { level: 1 });
  }

  get resumeLink() {
    return this.page.getByRole("link", { name: "Resume" }).first();
  }

  get mailtoLinks() {
    return this.page.locator('a[href="mailto:grvdhingra1999@gmail.com"]');
  }

  get linkedinLink() {
    return this.page.locator('a[href="https://www.linkedin.com/in/gauravxdhingra/"]');
  }

  get githubLink() {
    return this.page.locator('a[href="https://github.com/gauravxdhingra"]');
  }
}
