/// <reference types="Cypress" />
 
describe('My Fifth Test Suite', function() 
{
 
    it('My FirstTest case',function() {
 
        //Check boxes
        cy.visit("http://qaclickacademy.com/practice.php")
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        //window:alert
        cy.on('window:alert',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
         
        cy.on('window:confirm',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
         
        cy.get('#opentab').invoke('removeAttr','target').click()
         
        cy.url().should('include','qaclickacademy')
         
        cy.go('back')

it('My FirstTest case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
 
    const text=$e1.text()
    if(text.includes("Python"))
    {
 
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
        {
         const priceText=   price.text()
         expect(priceText).to.equal('26')
        })
    }
 
})

it('My FirstTest case',function() {
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

// cy.get('div.mouse-hover-content').invoke('show')
cy.contains('Top').click({force: true})
cy.url.should('include','Top')

          }) 
 
     })

    }) 

}) 
