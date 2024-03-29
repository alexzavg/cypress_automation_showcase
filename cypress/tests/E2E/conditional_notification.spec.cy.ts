import { PracticePage } from "../../pages/practicePage";

const practicePage = new PracticePage();
const url = Cypress.env('training_baseUrl');

describe('Conditional Notification Text', () => {

  beforeEach(()=>{
    cy.visit(`${url}/notification-message-rendered`);
  });

  it('call notification until a specific text is shown', () => {
    practicePage.checkNotificationText();
  });

});