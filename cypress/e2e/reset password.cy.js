describe('Resetpassword',()=>{
    it('forget password',()=>{
        cy.visit('https://ai-nova-app.com/');
        cy.get('.justify-end > .text-sm').click()
        cy.get('input[name="email"]').type('hashir.aslam@codistan.org')
        cy.get('.btn-style').click()
        cy.get('[aria-label="Please enter OTP character 1"]').type('1')
        cy.get('[aria-label="Please enter OTP character 2"]').type('2')
    })
})