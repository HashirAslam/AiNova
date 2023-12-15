describe('Google Login Test', () => {
    it('Click "Continue with Google"', () => {
      // Visit the website where you want to automate Google login
      cy.visit('https://ai-nova-app.com/'); // Replace with your URL
  
      // Locate and click the "Continue with Google" button
      cy.get('button:contains("Continue with Google")').click();
    cy.contains('Emailorphone').type("hashiraslam540@gmail.com");
      // You may need to wait for the Google login popup to appear and handle it
      // For example:
      // cy.get('.google-login-popup').should('be.visible');
      // cy.get('.google-login-popup .google-email-input').type('your_google_email');
      // cy.get('.google-login-popup .google-password-input').type('your_google_password');
      // cy.get('.google-login-popup .google-login-button').click();
      
      // You can add assertions or further test steps as needed
    });
  });
  