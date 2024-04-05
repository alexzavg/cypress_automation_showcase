import { ApiPage } from "../../pages/apiPage";

describe('REST API', () => {

  const apiPage = new ApiPage();

  it('Get auth token & check user profile - chained commands method', () => {
    apiPage.getAuthToken().then((token) => {
      let authToken = token;
      apiPage.getUserProfile(authToken);
    })
  });

  it('Get auth token & check user profile - alias method', () => {
    apiPage.getAuthToken().then((token) => {
      cy.wrap(token).as('authToken');
    });
    cy.get('@authToken').then((authToken) => {
      apiPage.getUserProfile(authToken);
    });
  });

});