// describe('Drag and Drop Sliders Test', () => {
//   it('should drag the slider to 95 and validate the value', () => {
//     // Visit the Selenium Playground page
//     cy.visit('https://www.lambdatest.com/selenium-playground');

//     // Click on "Drag & Drop Sliders" under "Progress Bars & Sliders"
//     cy.contains('a', 'Drag & Drop Sliders').click();

//     // Locate the slider with the default value of 15
//     cy.get('input[type="range"][value="15"]').then(($slider) => {
//       // Drag the slider to 95
//       const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
//         window.HTMLInputElement.prototype,
//         'value'
//       ).set;
//       const inputEvent = new Event('input', { bubbles: true });

//       nativeInputValueSetter.call($slider[0], 95);
//       $slider[0].dispatchEvent(inputEvent);

//       // Validate the slider value is 95
//       cy.wrap($slider).should('have.value', '95');

//      // cy.quit()
//         });
//   });
// });

describe('Selenium Playground Tests', () => {
  it('should interact with sliders', () => {
    // Visit the Selenium Playground page
    cy.visit('https://www.lambdatest.com/selenium-playground');

    // Ensure the "Drag & Drop Sliders" link is visible and not covered
    cy.contains('a', 'Drag & Drop Sliders').scrollIntoView().should('be.visible').then($link => {
      console.log('Link is visible:', $link);
      cy.wrap($link).click({ force: true });
    });

    // Wait for the new page to load and verify URL
    cy.url().should('include', '/drag-drop-range-sliders-demo');

    // Locate the slider with the default value of 15
    cy.get('input[type="range"][value="15"]').should('be.visible').then($slider => {
      // Drag the slider to 95
      console.log('Slider found:', $slider);
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      const inputEvent = new Event('input', {
        bubbles: true
      });
      nativeInputValueSetter.call($slider[0], 95);
      $slider[0].dispatchEvent(inputEvent);

      // Validate the slider value is 95
      cy.wrap($slider).should('have.value', '95');

      cy.window().then(win => {
        win.close();
      });
    });
  });
});
