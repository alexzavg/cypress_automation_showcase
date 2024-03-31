import { PracticePage } from "../../pages/practicePage";
import { DataGenerator } from "../../support/DataGenerator";

const data = new DataGenerator();
const practicePage = new PracticePage();
const url = Cypress.env('training_baseUrl');
const email = await data.randomEmail();

describe('Iframe', () => {

  beforeEach(()=>{
    cy.visit(`${url}/iframe`);
  });

  it(`Subscribe to mail newsletter located within an iframe`, () => {
    practicePage.emailSubIframe(email);
  });

});