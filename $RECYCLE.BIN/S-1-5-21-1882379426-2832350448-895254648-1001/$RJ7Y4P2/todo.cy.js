describe('Input Form Submit Test on Samsung Note 9 with Accessibility Check', () => {
  before(() => {
    // Visit the Selenium Playground page
    cy.visit('https://www.lambdatest.com/selenium-playground/');
    
    // Set viewport to Samsung Note 9 dimensions
    cy.viewport('samsung-note9');

    // Wait for all elements to load completely
    cy.wait(2000);
  });

  it('should click on Input Form Submit and verify accessibility', () => {
    // Click on "Input Form Submit" under "Input Forms"
    cy.contains('a', 'Input Form Submit').click();
    
    // Wait for the Input Form Submit page to load
    cy.url().should('include', 'input-form-demo');
    cy.wait(2000);

    // Inject axe for accessibility testing
   // cy.injectAxe();
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[id="inputEmail4"]').type('johndoe@example.com');
    cy.get('input[name="password"]').type('Password123');
    cy.get('input[name="company"]').type('LambdaTest');
    cy.get('input[name="website"]').type('https://www.lambdatest.com');
    cy.get('select[name="country"]').select('United States');
    cy.get('input[name="city"]').type('San Francisco');
    cy.get('#inputAddress1').type('123 Lambda Street');
    cy.get('#inputAddress2').type('Suite 100');
    cy.get('#inputState').type('California');
    cy.get('#inputZip').type('124505');


      cy.get('.bg-lambda-900').click();
      cy.contains('Form Demo')

       cy.lighthouse(); // Run Lighthouse performance check
      
  
  });
   
 
  
    });
 

