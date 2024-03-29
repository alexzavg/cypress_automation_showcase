import { PracticePage } from "../../pages/practicePage";
import { DataGenerator } from "../../support/DataGenerator";

const practicePage = new PracticePage();
const data = new DataGenerator();
const url = Cypress.env('training_baseUrl');

describe('Add & Remove Elements', () => {

  beforeEach(()=>{
    cy.visit(`${url}/add-remove-elements`);
  });

  it('add & delete elements', () => {
    practicePage.addElement();
    practicePage.checkElementQuantity(1);

    practicePage.addElement();
    practicePage.checkElementQuantity(2);

    practicePage.deleteElement()
    practicePage.checkElementQuantity(1);
    
    practicePage.deleteElement();
    practicePage.checkElementQuantity(0);
  });

});