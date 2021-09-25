/// <reference types="Cypress" />


 
// describe('Check Per Type of Employee', function() {

// it('Standard User', function(){
//   cy.visit('https://www.saucedemo.com/')

//     //STANDARD USER
//     cy.wait(500)
//     cy.get('#user-name').type('standard_user')
//     cy.get('#password').type('secret_sauce')
//     cy.get('#login-button').contains('Login').click()   
//     cy.get('#react-burger-menu-btn').click()  
//     cy.get('#logout_sidebar_link').contains('Logout').click()
//   })
 
//   it('Locked Out User', function(){
//     //LOCKED OUT USER
//     cy.wait(500)
//     cy.get('#user-name').type('locked_out_user')
//     cy.get('#password').type('secret_sauce')
//     cy.get('#login-button').contains('Login').click()  
    
//     cy.get('div.login_wrapper div.login_wrapper-inner div.form_column div.login-box form:nth-child(1) div.error-message-container.error:nth-child(3) > h3:nth-child(1)')
//     .then(function(errornotification){
//       //this will log into your testrunner
//       cy.log(errornotification.text())
//           })
//     cy.get('.error-button > .svg-inline--fa').click()
//     cy.get('#user-name').clear()
//     cy.get('#password').clear()
//   })
  
//   it('Problem User', function(){
//     //PROBLEM USER
//     cy.wait(500)
//     cy.get('#user-name').type('problem_user')
//     cy.get('#password').type('secret_sauce')
//     cy.get('#login-button').contains('Login').click()  
//     //INSERT CODET THAT WILL VERIFY ALL ERRORS 
//     cy.get('#react-burger-menu-btn').click()  
//     cy.get('#logout_sidebar_link').contains('Logout').click()
//     cy.get('body:nth-child(2) div:nth-child(2) div:nth-child(1) > div.login_logo').then(function(logodashboard){
//       //this will log into your testrunner
//       cy.log('User is in Login Page')
//       })
//     })
  
//   it('Performance Glitch User', function(){
//     //PERFORMANCE GLITCH USER
//     cy.wait(500)
//     cy.get('#user-name').type('performance_glitch_user')
//     cy.get('#password').type('secret_sauce')
//     cy.get('#login-button').contains('Login').click()  
//     //INSERT CODET THAT WILL VERIFY ALL ERRORS 
//     cy.wait(500)
//     cy.get('#react-burger-menu-btn').click()  
//     cy.get('#logout_sidebar_link').contains('Logout').click()
//     cy.get('body:nth-child(2) div:nth-child(2) div:nth-child(1) > div.login_logo').then(function(logodashboard){
//       //this will log into your testrunner
//       cy.log('User is in Login Page')
//       })
//     }) 
    
describe('Standard Employee', function() {
    it('Login', function(){
      cy.visit('https://www.saucedemo.com/')

        //Logging in with Standard Employee
        cy.wait(500)
        cy.get('#user-name').should("be.visible")
        cy.get('#password').should("be.visible")
        cy.get('#login-button').should("be.visible")
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').contains('Login').click()
        cy.get('.header_secondary_container').contains('Products').should('be.visible').then(function(homepage){
          cy.log('You are now in Homepage')
          })


        //Add To Cart
        cy.wait(500)
        cy.get('#add-to-cart-sauce-labs-backpack').click() 
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click() 
        cy.get('#add-to-cart-sauce-labs-onesie').click() 
        cy.get('#add-to-cart-sauce-labs-bike-light').click() 
        cy.get('#add-to-cart-sauce-labs-fleece-jacket').click() 
        cy.get('.shopping_cart_link').click()
        cy.get('.header_secondary_container').contains('Your Cart').should('be.visible').then(function(homepage){
          cy.log('You are now in Homepage')
          })

        //Verify items in the cart
        cy.wait(500)
        cy.get('.cart_list').contains('Sauce Labs Backpack')
        cy.get('.cart_list').contains('Sauce Labs Bolt T-Shirt')
        cy.get('.cart_list').contains('Sauce Labs Onesie')
        cy.get('.cart_list').contains('Sauce Labs Bike Light')
        cy.get('.cart_list').contains('Sauce Labs Fleece Jacket')
        cy.get('[data-test=checkout]').contains('Checkout').should('be.visible').click()  
        cy.get('.header_secondary_container').contains('Checkout: Your Information').should('be.visible').then(function(homepage){
          cy.log('You are now in Checkout')
          })
        
        //Input Credentials
        cy.wait(500)
        cy.get('#first-name').should("be.visible")
        cy.get('#last-name').should("be.visible")
        cy.get('#postal-code').should("be.visible")
        cy.get('#first-name').type("Jolly")
        cy.get('#last-name').type("Mickydees")
        cy.get('#postal-code').type("12345")
        cy.get('#continue').should("be.visible").click()
        cy.get('.header_secondary_container').contains('Checkout: Overview').should('be.visible').then(function(homepage){
          cy.log('You are now in Checkout')
          })

        //Click Finish Button
        cy.wait(500)
        cy.get('#finish').should('be.visible').click()

        //Verify Thank You Page
        cy.wait(500)

        cy.get('.header_secondary_container').contains('Checkout: Complete!').should('be.visible').then(function(homepage){
          cy.log('You are Checkout is now Complete!')
          })

        cy.get('#checkout_complete_container').then(function(thankyoupage){

            cy.log(thankyoupage.text())
            })

        //Back Home
        cy.get('#back-to-products').should('be.visible').click()

        //Verify if Back to Home
        cy.get('.header_secondary_container').contains('Products').should('be.visible').then(function(homepage){
          cy.log('You are now back in Homepage')
          })
    })  

})