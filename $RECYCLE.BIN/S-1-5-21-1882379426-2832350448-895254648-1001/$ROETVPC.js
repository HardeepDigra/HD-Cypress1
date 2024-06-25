describe('Drag and Drop Sliders Test', () => {
  it('should drag the slider to 95 and validate the value', () => {
    // Visit the Selenium Playground page
    cy.visit('https://www.lambdatest.com/selenium-playground');

    // Click on "Drag & Drop Sliders" under "Progress Bars & Sliders"
    cy.contains('a', 'Drag & Drop Sliders').click();

    // Locate the slider with the default value of 15
    cy.get('input[type="range"][value="15"]').then(($slider) => {
      // Drag the slider to 95
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value'
      ).set;
      const inputEvent = new Event('input', { bubbles: true });

      nativeInputValueSetter.call($slider[0], 95);
      $slider[0].dispatchEvent(inputEvent);

      // Validate the slider value is 95
      cy.wrap($slider).should('have.value', '95');

     // cy.quit()
        });
  });
});
