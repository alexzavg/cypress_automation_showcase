import { PracticePage } from "../../pages/practicePage";
import { DataGenerator } from "../../support/DataGenerator";

const practicePage = new PracticePage();
const data = new DataGenerator();
const url = Cypress.env('training_baseUrl');
const randomNumber = await data.randomNumber(5);
const randomString = await data.randomString(10);
const randomSpecChar = await data.specialChar(1);
const randomPassword = randomString + randomNumber + randomSpecChar;
const date = await data.getDateForInput();

describe('Inputs', () => {

  beforeEach(()=>{
    cy.visit(`${url}/inputs`);
  });

  it('number input', () => {
    practicePage.fillNumberInput(randomNumber);
  });

  it('text input', () => {
    practicePage.fillTextInput(randomString);
  });

  it('password input', () => {
    practicePage.fillPasswordInput(randomPassword);
  });

  it('date input', () => {
    practicePage.fillDateInput(date);
  });

});