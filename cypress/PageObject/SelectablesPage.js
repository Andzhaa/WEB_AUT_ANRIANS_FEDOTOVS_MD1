import { BasePage } from "./BasePage";

export class SelectablesPage extends BasePage{
  static get url() {
    return "https://demoqa.com/selectable";
  }

  static get gridButton() {
    return cy.get("a#demo-tab-grid");
  }

  static get getListItem() {
    return cy.get(".list-group-item");
  }
}