describe('template spec', () => {
  it('passes', () => {
    const envName = Cypress.env('envName');
    cy.log(`Running tests in ${envName} environment`);
    cy.visit('');
    cy.wait(3000);
  })
})