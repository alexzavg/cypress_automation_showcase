export class HomePage {

  elements = {
    headerLogo: () => cy.get('[src="/static/images/home/logo.png"]'),
    signUpNewBtn: () => cy.get('[href="/login"]'),
    signUpText: () => cy.get('h2').contains('New User Signup!'),
    nameField: () => cy.get('[data-qa="signup-name"]'),
    emailField: () => cy.get('[data-qa="signup-email"]'),
    signUpBtn: () => cy.get('[data-qa="signup-button"]'),
    accountInfoText: () => cy.get('b').contains('Enter Account Information'),
  };

  verifyHeader(){
    cy.visit('');
    this.elements.headerLogo().should('be.visible');
  };

  signUp(name: string, email: string){
    this.elements.signUpNewBtn().click();
    this.elements.signUpText().should('be.visible');
    this.elements.nameField().type(name);
    this.elements.emailField().type(email);
    this.elements.signUpBtn().click();
    this.elements.accountInfoText().should('be.visible');
  };

}
