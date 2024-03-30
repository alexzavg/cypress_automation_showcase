import { PracticePage } from "../../pages/practicePage";

const practicePage = new PracticePage();
const url = Cypress.env('training_baseUrl');
const text = 'Black';
const textArr = ['Blue', 'Red', 'Yellow', 'Black', 'Green'];
const randomText = textArr[Math.floor(Math.random() * textArr.length)];

describe('Radio Buttons', () => {

  beforeEach(()=>{
    cy.visit(`${url}/radio-buttons`);
  });

  it(`should check & assert checked state for a single radio button with ${text} text`, () => {
    practicePage.checkRadioBtn(text);
  });

  it(`should check & assert checked state for a random radio button`, () => {
    practicePage.checkRadioBtnConditional(randomText);
  });

});