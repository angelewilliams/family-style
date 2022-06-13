describe('User should be able to add a recipe', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://family-style-api-aw.herokuapp.com/api/v1/recipes', { fixture: 'recipe-with-post.json' });
        cy.intercept('POST', 'https://family-style-api-aw.herokuapp.com/api/v1/recipes', {
            statusCode: 201,
            body: {
                title: "Chocolate Chip Cookies",
                url: "https://smittenkitchen.com/2015/04/salted-chocolate-chunk-cookies/",
                notes: "these are delicious",
                submittedBy: "Cypress Test",
                group: "group1",
                tag: "dessert",
                id: 1655075917927
            },
        })

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


    it('Should be able to go to submit recipe form', () => {
        cy.get('#submitRecipe')
            .click()
        cy.url().should('eq', 'http://localhost:3000/group1/submitRecipe')
    })

    it('Should be able to submit a recipe', () => {

        cy.visit('http://localhost:3000/group1/submitRecipe')
        cy.get('.form-title')
            .type('Chocolate Chip Cookies')
        cy.get('.form-url')
            .type('https://smittenkitchen.com/2015/04/salted-chocolate-chunk-cookies/')
        cy.get('.form-notes')
            .type('these are delicious')
        cy.get('.form-submittedBy')
            .type('Cypress Test')
        cy.get('.form-tag')
            .select('dessert')
        cy.get('.form-submit')
            .click()
        cy.get('.successful-submit').should('exist')
        cy.get('.return-to-recipes').click()
        cy.url().should('eq', 'http://localhost:3000/group1')
    })

    it('Should see added recipe on main page', () => {
        cy.get('h3.group-link').click()
        cy.get('#1655075917927').contains('Chocolate Chip Cookies')
        cy.get('#1655075917927').contains('Notes')
        cy.get('#1655075917927').contains('Cypress Test')
        cy.get('#1655075917927').contains('Dessert')
    })

})