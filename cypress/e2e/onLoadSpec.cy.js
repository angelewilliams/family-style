describe('On load page and recipe display', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://family-style-api-aw.herokuapp.com/api/v1/recipes', { fixture: 'recipe-data.json' });
    cy.visit('http://localhost:3000');
  });

  it('Should have a nav with title and three clickable links', () => {
    cy.contains('familystyle')
    cy.get('#favorites img')
      .should('have.attr', 'src')
     cy.get('#group img')
      .should('have.attr', 'src')
      cy.get('#submitRecipe img')
      .should('have.attr', 'src')
  })

  it('Should have a group selection button', () => {
    cy.get('.select-group')
    .contains('Showcase')
    .click()
    cy.url().should('eq', 'http://localhost:3000/group1/')
  })


  it('Should see 5 Recipes displayed', () => {
    cy.get('.select-group')
    .contains('Showcase')
    .click()
    cy.url().should('eq', 'http://localhost:3000/group1/')
    cy.get('.recipes-wrapper').children().should('have.length', 5)
    cy.get('.recipe-link-wrapper#1').contains('Angel Food Cake')
    cy.get('.recipe-link-wrapper#1').contains('Notes')
    cy.get('.recipe-details-wrapper').contains('From: Angele')
    cy.get('.recipe-details-wrapper').contains('Dessert')
  })

  it('Should be able to toggle notes section of recipe link display', () => {
    cy.get('.select-group')
    .contains('Showcase')
    .click()
    cy.url().should('eq', 'http://localhost:3000/group1/')
    cy.get('button#1.toggle').click()
    cy.get('.notes-content').should('be.visible')
    cy.get('button#1.toggle').click()
    cy.get('.recipe-details-wrapper').contains('From: Angele')

  })

})


