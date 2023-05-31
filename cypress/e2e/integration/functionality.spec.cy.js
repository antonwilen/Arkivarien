describe("Image functionality in Arkivarien", () => {
    it('Verifies that the image carousel contains at least one image', () => {
        // Visit the homepage
        cy.visit('/');
        // Select the <img> element with the class "image"
        cy.get('.image')
            // Verify that the element has a src attribute
            .should('have.attr', 'src')
            // Check if the 'src' attribute value contains 'http'
            .and('include', 'http');
    });
})