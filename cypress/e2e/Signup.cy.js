describe('signup',()=> {
    beforeEach(()=> {
     cy.visit('https://ai-nova-app.com/')
     cy.get('[href="/signup"]').click()
    })

    it('scenrio 1: verify that validation error message occurs when doesnot provide any input data', ()=>{
        cy.get('.btn-style').click()
    })

    it('scenrio 2:verify that user signup successfully after enter valid credentials', ()=>{
        cy.fixture('signup').then((data) =>{
            cy.signupWithValidCredentials(data[0].FirstName,data[0].LastName,data[0].Email,data[0].Age,data[0].Password,data[0].ConfirmPassword)

        })
    })

    it('scenrio 3:verify that validation message occurs when user enter unmatched password and confirm password', ()=>{
        cy.fixture('signup').then((data) =>{
            cy.signupWithinValidCredentials(data[1].FirstName,data[1].LastName,data[1].Email,data[1].Age,data[1].Password,data[1].ConfirmPassword)
        
    })
})
it('scenrio 3:verify that validation message occurs when user enter invalid email', ()=>{
    cy.fixture('signup').then((data) =>{
        cy.signupWithinValidCredentials(data[2].FirstName,data[2].LastName,data[2].Email,data[2].Age,data[2].Password,data[2].ConfirmPassword)
    
    })
})

 })