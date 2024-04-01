import { PracticePage } from "../../pages/practicePage";
import { DataGenerator } from "../../support/DataGenerator";

const data = new DataGenerator();
const practicePage = new PracticePage();
const url = Cypress.env('training_baseUrl');
const promptValue = await data.randomString(10);

describe('JavaScript Dialogs', () => {

  beforeEach(()=>{
    cy.visit(`${url}/js-dialogs`);
  })

  it(`accept alert`, () => {
    practicePage.acceptAlert();
  });

  it(`accept confirm`, () => {
    practicePage.jsConfirm(true);
  });

  it(`cancel confirm`, () => {
    practicePage.jsConfirm(false);
  });

  it(`accept prompt with random value`, () => {
    practicePage.jsPrompt(promptValue);
  });

  it(`cancel prompt with empty string`, () => {
    practicePage.jsPrompt('', false);
  });

});