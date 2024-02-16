import { DataGenerator } from "../support/DataGenerator";

const data = new DataGenerator();
const email = await data.randomEmail();

describe('template spec', () => {
  it('passes', () => {
    
    const envName = Cypress.env('envName');
    cy.log(`Running tests in ${envName} environment`);
    cy.log(email);
    cy.visit('');
    cy.wait(15000);
  })
})