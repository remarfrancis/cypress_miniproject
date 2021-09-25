/// <reference types="Cypress" />


// describe('My First Test', function(){

    it('My First Test Case', function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        //in Cypress, get is equal to find element
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)
        //Parent Child Chaining
        cy.get('.products').as('productLocator')
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get(':nth-child(3) > .product-action > button')
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
        {
            //this will log in to your console
            console.log('sf')
        })
         

        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg=$el.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            {
                $el.find('button').click()
            }
            })

        cy.get('.brand').should('have.text','GREENKART')

        //this is to print in logs
        cy.get('.brand').then(function(logoelement){
            //this will log into your testrunner
            cy.log(logoelement.text())
        })

        //assert if logo text is correctly displayed
        //cy.get('.brand').should('have.text','GREENKART')

        // const logo = cy.get('.brand')
        // cy.log(cy.get('.brand').text())
        // cy.log(logo.text())


  })
