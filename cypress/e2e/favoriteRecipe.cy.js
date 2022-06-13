describe('User should be able to favorite a recipe', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://family-style-api-aw.herokuapp.com/api/v1/recipes', { fixture: 'recipe-with-post.json' });
        cy.visit('http://localhost:3000');
    });

    it('Should be able to go to favorites page and see none', () => {
        cy.get('#favorites')
            .click()
        cy.url().should('eq', 'http://localhost:3000/group1/favorites')
        cy.get('h3').contains("Looks like you haven't favorited any recipes yet!")
        cy.get('.errorLink').contains("Browse Recipes to see if you want to save any!")
        cy.get('.return-group1').click()
        cy.url().should('eq', 'http://localhost:3000/group1')
    })

    it('Should be able to favorite a recipe and see it on favorites', () => {
        cy.get('#group')
            .click()
        cy.get('#recipe1655075917927').click()
        cy.get('#favorites').click()
        cy.url().should('eq', 'http://localhost:3000/group1/favorites')
        cy.get('#1655075917927').contains('Chocolate Chip Cookies')
        cy.get('#1655075917927').contains('Notes')
        cy.get('#1655075917927').contains('Cypress Test')
        cy.get('#1655075917927').contains('Dessert')
    
    })

    it('Should see added recipe on main page', () => {
        cy.get('#group')
        .click()
        cy.get('#recipe1655075917927').click()
        cy.get('#favorites').click()
        cy.get('#recipe1655075917927').click()
        cy.get('h3').contains("Looks like you haven't favorited any recipes yet!")
        cy.get('.errorLink').contains("Browse Recipes to see if you want to save any!")
        cy.get('.return-group1').click()
        cy.url().should('eq', 'http://localhost:3000/group1')
    })

})
