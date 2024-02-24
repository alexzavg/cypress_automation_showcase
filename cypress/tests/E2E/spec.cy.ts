import { DataGenerator } from "../../support/DataGenerator";
import { HomePage } from "../../pages/homePage";
import { testData } from "../../data/testData";

const data = new DataGenerator();
const homePage = new HomePage();
const email = await data.randomEmail();

describe('Automation Practice', () => {

  it('TC #1', () => {
    const envName = Cypress.env('envName');
    cy.log(`Running tests in ${envName} environment`);
    cy.log(email);

    homePage.verifyHeader();
    homePage.signUp(testData.name, email);
  });

});