/// <reference types="Cypress" />


describe('My Third Test', function(){

    it('My Third Test Case', function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        //in Cypress, get is equal to find element
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').as('productLocator')

         

        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg=$el.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            {
                $el.find('button').click()
            }
            })

            cy.get('.cart-icon > img').click()
            cy.contains('PROCEED TO CHECKOUT').click()
            cy.contains('Place Order').click()
  })  
})
