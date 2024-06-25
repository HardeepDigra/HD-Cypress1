describe('Drag and Drop Sliders Test', () => {
  it('should drag the slider to 95 and validate the value', () => {
    // Visit the Selenium Playground page
    cy.visit('https://www.lambdatest.com/selenium-playground');

    // Click on "Drag & Drop Sliders" under "Progress Bars & Sliders"
    cy.contains('a', 'Drag & Drop Sliders').click();

    // Locate the slider with the default value of 15
    cy.get('input[type="range"][value="15"]', { timeout: 10000 }).should('be.visible').then(($slider) => {
      console.log('Slider initial position:', $slider.position());

      // Drag the slider to 95
      cy.wrap($slider).trigger('mousedown').trigger('mousemove', { clientX: 300, clientY: 0, force: true }).trigger('mouseup', { force: true });

      console.log('Slider final position:', $slider.position());

      // Validate the slider value is 95
      cy.get('input[type="range"][value="95"]').should('exist');

      // Validate the slider value is 95
      cy.get('input[type="range"][value="95"]').should('exist').then($sliderValue => {
        console.log('Slider value:', $sliderValue.val());
        expect($sliderValue.val()).to.equal('95');
      });
    }).catch((err) => {
      console.log('Caught an uncaught exception:', err);
      // Handle the exception as needed
    });
  });
});
