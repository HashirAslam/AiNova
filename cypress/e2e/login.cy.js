describe('login',()=> {
    beforeEach(()=> {
     cy.visit('https://ai-nova-app.com/')
    })
    it('scenrio 1: verify that validation messages occurs when user doesnot provide any input data', ()=>{
        cy.get('[type="submit"]').click()
    })
    it('scenerio 2: verify that user signup successfully after entering valid credentials', ()=>{
        cy.fixture('login').then((data) =>{
            cy.signinwithvalidcredentials(data[0].Email,data[0].password)
        })
    })
    it('scenerio 2: verify that validation messages occurs when user provide invalid email and valid password', ()=>{
        cy.fixture('login').then((data) =>{
            cy.signinwithinvalidcredentials(data[1].Email,data[1].password)
        })
    })
    it('scenerio 2: verify that validation messages occurs when user provide valid email and invalid password', ()=>{
        cy.fixture('login').then((data) =>{
            cy.signinwithinvalidcredentials(data[2].Email,data[2].password)
        })
    })
})