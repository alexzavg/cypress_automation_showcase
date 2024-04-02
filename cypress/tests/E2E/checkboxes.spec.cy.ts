import { PracticePage } from "../../pages/practicePage";

const practicePage = new PracticePage();
const url = Cypress.env('training_baseUrl');

describe('Checkboxes', () => {

  it(`check & assert checkbox state`, () => {
    cy.visit(`${url}/checkboxes`);
    practicePage.checkboxCheck();
  });

});