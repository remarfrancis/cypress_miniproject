/// <reference types="Cypress" />
 
describe('My Fifth Test Suite', function() 
{
    it('Alert Example', function(){
        //visible invisible
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.wait(2000)
        cy.get('#alertbtn').click()
        cy.get("[value='Confirm']").click()
        cy.on('windows:alert')

        //window:alert
        cy.on('window:confirm',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
})