
describe('profile pic',()=> {
    it('profile pic test case',()=> {
        cy.viewport(1920, 1080);
     cy.visit('https://ai-nova-app.com/')
    cy.get('input[name="email"]').type('bolewil619@monutri.com')
    cy.get('input[name="password"]').type('Abbas1234@')
    cy.get('.btn-style').click();
    cy.wait(5000)
    cy.get('.relative').eq(0).click()
    cy.contains('Upload Picture By Clicking the text (max 2mb)').click()
    cy.wait(4000)
    cy.get('input[type="file"]').attachFile('example.png',{subjectType:'input'})
    cy.wait(5000)
    cy.contains('Save').click()
    cy.wait(4000)

})

})