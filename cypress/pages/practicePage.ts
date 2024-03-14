export class PracticePage {

  elements = {
    numberInput: () => cy.get('#input-number'),
    textInput: () => cy.get('#input-text'),
    passwordInput: () => cy.get('#input-password'),
    dateInput: () => cy.get('#input-date'),
  }

  fillNumberInput(value: string) {
    this.elements.numberInput().type(value).should('have.value', value);
  }

  fillTextInput(value: string) {
    this.elements.textInput().type(value).should('have.value', value);
  }

  fillPasswordInput(value: string) {
    this.elements.passwordInput().type(value);

    // check masked value length
    this.elements.passwordInput().invoke('val').should((value) => {
      expect(value).to.have.length.greaterThan(0);
    });

    // unmask the password value
    this.elements.passwordInput().invoke('attr', 'type', 'text');
    this.elements.passwordInput().should('have.value', value);
  }

  fillDateInput(value: string) {
    this.elements.dateInput().type(value).should('have.value', value);
  }

  getBrowserStats(browserName: string, statName: string) {
    return cy.get('.table thead th').contains(statName).invoke('index').then((memoryIndex) => {
      return cy.get('.table tbody tr').filter(`:contains("${browserName}")`).find(`td:nth-child(${memoryIndex + 1})`).invoke('text');
    });
  }

}
