describe('Testing for Sign Up page', () => {

   beforeEach('visit local host', () => {

      cy.visit('http://localhost:3000/')

   })
      

   it('show the proper elements', () => {
      
      cy.get('.link')
         .click()

      cy.get('input[name="name"]')
         .should('exist')
      
      cy.get('select[name="size"]')
         .should('exist')
      
      cy.get('input[name="firstTopping"]')
         .should('exist')

      cy.get('input[name="secondTopping"]')
         .should('exist')

      cy.get('input[name="thirdTopping"]')
         .should('exist')

      cy.get('input[name="fourthTopping"]')
         .should('exist')

      cy.get('input[name="fifthTopping"]')
         .should('exist')
      
      cy.get('textarea[name="instruction"]')
         .should('exist')
      
      cy.get('button[type="submit"]')
         .should('exist')

   })

   it('type and check and in the inputs', () => {


      cy.get('.link').click()

      cy.get('input[name="name"]')
         .should('have.value', '')
         .type('Joseph Kim')
         .should('have.value', 'Joseph Kim')
      
      cy.get('select[name="size"]')
         .should('have.value', '')
         .select('small')
         .should('have.value', 'small')
      
      cy.get('input[name="firstTopping"]')
         .check()
         .should('be.checked')

      cy.get('input[name="secondTopping"]')
         .check()
         .should('be.checked')

      cy.get('input[name="thirdTopping"]')
         .check()
         .should('be.checked')

      cy.get('input[name="fourthTopping"]')
         .check()
         .should('be.checked')

      cy.get('input[name="fifthTopping"]')
         .check()
         .should('be.checked')
      
      cy.get('textarea[name="instruction"]')
      
      cy.get('button[type="submit"]')
         .should('not.be.disabled')

   })

   it('Submit button enable to clicked after every inputs are filled out', () => {

      cy.get('.link').click()

      // Name Input
      cy.get('button[type="submit"]').should('be.disabled')
      cy.get('input[name="name"]').type('Joseph Kim')
      cy.get('button[type="submit"]').should('be.disabled')
      
      // size Dropdown
      cy.get('button[type="submit"]').should('be.disabled')
      cy.get('select[name="size"]').select('small')
      cy.get('button[type="submit"]').should('be.disabled')

      // Checkbox Input
      cy.get('button[type="submit"]').should('be.disabled')
      cy.get('input[name="firstTopping"]').check().should('be.checked')
      cy.get('button[type="submit"]').should('be.disabled')

      cy.get('button[type="submit"]').should('be.disabled')
      cy.get('input[name="secondTopping"]').check().should('be.checked')
      cy.get('button[type="submit"]').should('be.disabled')

      cy.get('button[type="submit"]').should('be.disabled')
      cy.get('input[name="thirdTopping"]').check().should('be.checked')
      cy.get('button[type="submit"]').should('be.disabled')

      cy.get('button[type="submit"]').should('be.disabled')
      cy.get('input[name="fourthTopping"]').check().should('be.checked')
      cy.get('button[type="submit"]').should('be.disabled')

      cy.get('button[type="submit"]').should('be.disabled')
      cy.get('input[name="fifthTopping"]').check().should('be.checked')
      cy.get('button[type="submit"]').should('not.be.disabled')

      cy.get('button[type="submit"]').click()

   })

})