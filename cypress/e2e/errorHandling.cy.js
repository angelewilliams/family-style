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

    it('Should see an error page if type in a non existent url', () => {
        cy.visit('http://localhost:3000/cypress-testing')
        cy.get('h3').contains("Uh oh, looks like Angele did not code anything for /cypress-testing yet.")
        cy.get('h4').contains("But here's an awesome turtle her sister drew:")
        cy.get('.awesome-turtle').should('have.attr', 'src', "/static/media/awesome-turtle.46cc6ed6fd4d934df411.png" )
    })

})