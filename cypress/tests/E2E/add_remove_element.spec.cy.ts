import { PracticePage } from "../../pages/practicePage";

const practicePage = new PracticePage();
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