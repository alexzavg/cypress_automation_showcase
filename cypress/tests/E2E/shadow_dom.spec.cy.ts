import { PracticePage } from "../../pages/practicePage";

const practicePage = new PracticePage();
const url = Cypress.env('training_baseUrl');

describe('Shadow DOM', () => {

  beforeEach(()=>{
    cy.visit(`${url}/shadowdom`);
  });

  it(`Click button inside a shadow DOM`, () => {
    practicePage.clickShadowRootElement();
  });

});