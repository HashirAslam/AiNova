describe('login', () => {
    it('type in', () => {
        cy.viewport(1920, 1080);
        cy.visit('https://ai-nova-app.com/');
        cy.get('input[name="email"]').type("sadiq@gmail.com");
        cy.get('input[name="password"]').type("Sadiq123@");
        cy.get('.btn-style').click();
        cy.wait(4000);

        // Click on the element to redirect to the new page
        cy.contains('My Links').click();
        cy.wait(4000);

        // Click on the element with class 'justify-between' to redirect to the next page
        cy.get('.justify-between').click();
        // cy.get('.justify-between.?bg-\\#D3B1FF').click();
    });
});
