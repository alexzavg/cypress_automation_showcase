import { PracticePage } from "../../pages/practicePage";

const practicePage = new PracticePage();
const url = Cypress.env('training_baseUrl');
const colors = ['red', 'green', 'blue'];

describe('Drag & Drop', () => {

  beforeEach(()=>{
    cy.visit(`${url}/drag-and-drop-circles`);
  });

  it(`execute drag & drop for a single circle with ${colors[0]}`, () => {
    practicePage.dragAndDropCircles(colors[0]);
  });

  it('execute drag & drop for all circles', () => {
    colors.forEach((color) => {
      practicePage.dragAndDropCircles(color);
    });
  });

});