import { PracticePage } from "../../pages/practicePage";
import { DataGenerator } from "../../support/DataGenerator";

const data = new DataGenerator();
const practicePage = new PracticePage();
const url = Cypress.env('training_baseUrl');
const email = await data.randomEmail();

describe('Iframe', () => {

  it(`Subscribe to mail newsletter located within an iframe`, () => {
    cy.visit(`${url}/iframe`);
    practicePage.emailSubIframe(email);
  });

  it(`Assert and click a button within a nested iframe`, () => {
    cy.visit(`https://www.dezlearn.com/nested-iframes-example/`);
    practicePage.clickNestedIframeBtn();
  });

});