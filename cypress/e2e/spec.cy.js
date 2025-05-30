import { SelectablesPage } from "../PageObject/SelectablesPage"

describe('MD1 tests', () => {
  it('passes', () => {
    // Lists for stuff, makes shorter and cooler
    const clicked = ["Two", "Four", "Six", "Eight"];
    const unclicked = ["One", "Three", "Five", "Seven", "Nine"];
    //Getting to the page
    SelectablesPage.visit();
    //Click grid
    SelectablesPage.gridButton.click();
    //Click the things
    clicked.forEach((label) => {
        SelectablesPage.getListItem.contains(label).click();
    });
    //Validate clicked stuff
    clicked.forEach((label) => {
      SelectablesPage.getListItem.contains(label).should("have.class", "active");
    });
    //Validate unclicked stuff
    unclicked.forEach((label) => {
      SelectablesPage.getListItem.contains(label).should("not.have.class", "active");
    });
  });
});