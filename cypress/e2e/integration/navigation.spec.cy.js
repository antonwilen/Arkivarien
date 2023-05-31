describe("Test about page", () => {
    it("Verifies that navigation between the homepage and the about page is functioning correctly", () => {
        // Visit the homepage
        cy.visit("/")
        // Find a link that includes the text "About" and click on it
        cy.contains("a", "About").click()
        // Verify that we navigated to the correct page
        cy.url().should("include", "/About")
        // Verify that we have the correct content
        cy.contains("div", "Om Arkivarien (Version 1.0) Välkommen till Arkivarien, ett spännande geografispel där du får testa dina kunskaper om svenska städer genom att titta på bilder. Spelet använder sig av K-samsöks API för att tillhandahålla autentiska och intressanta bilder från olika platser runt om i Sverige.")
        // Find a link that includes the text "Arkivariens hem" and click on it
        cy.contains("a", "Arkivariens hem").click()
        // Verify that we navigated to the correct page
        cy.url().should("include", "/")
        // Verify that we have the correct content
        cy.get('.imageCarousel').should('exist');
    })
})