/// <reference types="Cypress" />


describe('Automation Practice Site', function(){

    it('Radio Buttons', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //in Cypress, get is equal to find element
        cy.wait(2000)
        // cy.get('[for="radio1"] > .radioButton').click()
        // cy.get('[for="radio2"] > .radioButton').click()
        // cy.get('[for="radio3"] > .radioButton').click()
  })  

    it('Suggestion Class', function(){

    // cy.wait(2000)
    // cy.get('#autocomplete').type('Philippines')
        })  

    it('Checkbox', function(){

        cy.wait(2000)
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.wait(1000)
        cy.get('input[type="checkbox"]').check(['option1','option2','option3'])
        cy.get('input[type="checkbox"]').uncheck(['option1','option2','option3'])

    })

    it('Select', function(){

        cy.wait(2000)
        cy.get('select').select('option1').should('have.value','option1')
        cy.get('select').select('option2').should('have.value','option2')
        cy.get('select').select('option3').should('have.value','option3')

    })

    it('Dropdown', function(){

        cy.wait(2000)
        cy.get('#autocomplete').type('Phili')

        cy.get('.ui-menu-item div').each(($e1, index, $list) => {
 
            if($e1.text()==="Philippines")
            {
                $e1.click()
            }
         
         
        })

        //autocomplete
        cy.get('#autocomplete').should('have.value','Philippines')
    })

    it('Visible/Invisible', function(){
            //visible invisible
            cy.get('#displayed-text').should('be.visible')
            cy.get('#hide-textbox').click()
            cy.get('#displayed-text').should('not.be.visible')
            cy.get('#show-textbox').click()
            cy.get('#displayed-text').should('be.visible')
    })




})
