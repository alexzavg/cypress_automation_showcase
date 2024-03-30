import { PracticePage } from "../../pages/practicePage";

const practicePage = new PracticePage();
const url = Cypress.env('training_baseUrl');

describe('Drag & Drop', () => {

  beforeEach(()=>{
    cy.visit(`${url}/drag-and-drop`);
  });

  it('execute drag & drop and assert element positions', () => {
    practicePage.dragAndDropSquares();
  });

});