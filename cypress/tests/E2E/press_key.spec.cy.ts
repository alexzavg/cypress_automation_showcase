import { PracticePage } from "../../pages/practicePage";

const practicePage = new PracticePage();
const url = Cypress.env('training_baseUrl');

describe('Press Key', () => {

  it(`press ESC key`, () => {
    cy.visit(`${url}/key-presses`);
    practicePage.pressKey('esc', 'ESCAPE');
  });

});