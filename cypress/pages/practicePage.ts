export class PracticePage {

  elements = {
    numberInput: () => cy.get('#input-number'),
    textInput: () => cy.get('#input-text'),
    passwordInput: () => cy.get('#input-password'),
    dateInput: () => cy.get('#input-date'),
    addElementBtn: () => cy.get('[onclick="addElement()"]'),
    deleteElementBtn: () => cy.get('[onclick="deleteElement()"]'),
    showNotificationBtn: () => cy.get('[href="/notification-message"]'),
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

  addElement() {
    this.elements.addElementBtn().click();
  }

  checkElementQuantity(quantity: number) {
    this.elements.deleteElementBtn().should('have.length', quantity);
  }

  deleteElement() {
    this.elements.deleteElementBtn().first().click();
  }

  checkNotificationText() {
    this.elements.showNotificationBtn().click();

    cy.get('body').then((body) => {
      if (body.find('#flash:contains("Action unsuccessful, please try again")').length > 0) {
        cy.log('Action unsuccessful, retrying...');
        this.checkNotificationText();
      } else if (body.find('#flash:contains("Action successful")').length > 0) {
        cy.log('Action successful, yeah!');
      }
    });
  }

  getBrowserStats(browserName: string, statName: string) {
    return cy.get('.table thead th').contains(statName).invoke('index').then((memoryIndex) => {
      return cy.get('.table tbody tr').filter(`:contains("${browserName}")`).find(`td:nth-child(${memoryIndex + 1})`).invoke('text');
    });
  }

  checkRadioBtn(btnText: string) {
    cy.contains('label', btnText).then((label) => {
      const id = label.attr('for');
      cy.get(`#${id}`).check().should('be.checked');
    });
  }

  checkRadioBtnConditional(btnText: string) {
    cy.contains('label', btnText).then((label) => {
      // Get the associated radio button using prev(), assuming the input is right before the label
      const radioButton = cy.wrap(label).prev('input[type="radio"]');
  
      radioButton.then((rb) => {
        if (rb.is(':disabled')) {
          cy.log(`Button with ${btnText} is disabled, not performing a click.`);
        } else {
          radioButton.check().should('be.checked');
          cy.log(`${btnText} Button is selected.`);
        }
      });
    });
  }

  dragAndDropSquares() {
    const dataTransfer = new DataTransfer();

    // Drag the 'A' header and drop it on the 'B' header
    cy.get('#column-a header').trigger('dragstart', {
      dataTransfer
    });
    cy.get('#column-b header').trigger('drop', {
      dataTransfer
    });
    cy.get('#column-a header').trigger('dragend');

    // Assertion to check the order has changed
    cy.get('#dnd-columns .column').first().within(() => {
      cy.get('header').should('contain', 'B');
    });
    cy.get('#dnd-columns .column').last().within(() => {
      cy.get('header').should('contain', 'A');
    });
  }

  dragAndDropCircles(color: string) {
    const dataTransfer = new DataTransfer();

    // Drag & drop circle with specific color
    cy.get(`#source .${color}`).trigger('dragstart', {
      dataTransfer
    });
    cy.get('#target').trigger('drop', {
      dataTransfer
    });
    // Source element gets destroyed so no need to call 'dragend' event

    // Assert color presence in the target area
    cy.get(`#target .${color}`).should('be.visible');
    // Assert color absence in the source area
    cy.get(`#source .${color}`).should('not.exist');
  }

  clickShadowRootElement() {
    cy.get('#shadow-host').shadow().find('#my-btn').click();
  }

}
