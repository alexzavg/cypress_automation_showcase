import { PracticePage } from "../../pages/practicePage";

const practicePage = new PracticePage();
const url = Cypress.env('training_baseUrl');

describe('Shadow DOM', () => {

  it(`Click button inside a shadow DOM`, () => {
    cy.visit(`${url}/shadowdom`);
    practicePage.clickShadowRootElement();
  });

  it(`Check image inside a nested shadow DOM`, () => {
    cy.visit(`https://books-pwakit.appspot.com/`);
    practicePage.checkNestedShadowRootElement();
  });

});