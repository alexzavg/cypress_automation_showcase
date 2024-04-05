export class ApiPage {

  email = Cypress.env('restApi_email');
  password = Cypress.env('restApi_password');
  baseUrl = Cypress.env('restApi_baseUrl');
 
  uploadFile(filePath: string, url: string) {
    cy.fixture(filePath, 'binary').then((fileContent) => {
      cy.request({
        method: 'POST',
        url: url,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: fileContent,
        encoding: 'binary',
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  }

  getAuthToken() {
    return cy.request({
      method: 'POST',
      url: `${this.baseUrl}/users/login`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        email: this.email,
        password: this.password,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      return response.body.data.token;
    });
  }

  getUserProfile(token: any) {
    return cy.request({
      method: 'GET',
      url: `${this.baseUrl}/users/profile`,
      headers: {
        'accept': 'application/json',
        'x-auth-token': token
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data.email).to.eq(this.email);
    });
  }

}