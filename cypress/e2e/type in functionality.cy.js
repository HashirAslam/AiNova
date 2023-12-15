describe('login',()=> {
    it('type in',()=> {
     cy.visit('https://ai-nova-app.com/')
     cy.get('input[name="email"]').type("sadiq@gmail.com");
     cy.get('input[name="password"]').type("Sadiq123@");
     cy.get('.btn-style').click();
     cy.get('input[name="search"]').type("sympotms of diabetes");
     cy.get('.absolute > .btn-style').click();
     cy.wait(12000);
     cy.get('.mb-2 > :nth-child(1)').click();

    })

})