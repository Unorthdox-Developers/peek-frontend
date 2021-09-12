///<reference types="cypress" />
/// @ts-check

describe('example to-do app', () => {
    beforeEach(() => {
      
      cy.visit("http://localhost:3000")
    })
  
    it('displays repository card, github and dashboard buttons ', () => {
       cy.get("[placeholder='Search Repository']").type("Peek-FrontEnd")
       cy.contains('button','Search').click()
       cy.get('div.MuiCardContent-root').should('have.length.above',0)
       cy.get('button.atom-button-root-13')
       .should('have.length.above',0).
       each(($atomButton,$index,$buttonList) => {
           if($atomButton.text() === 'GitHub'){
                $atomButton.text
                cy.wrap($atomButton).click()
           }
       })
    })
  
  })
  