describe("Home Page", () => {
  it("Website successfully loads", () => {
    cy.viewport("iphone-6");
    cy.visit("http://localhost:3000/");

    cy.get("#main").should("be.visible");
    cy.get("#search-videos").should("be.visible").type("battle");
    cy.get("#IHnhSxizVOA").should("be.visible");
    cy.get("#G0j8CMR0rFU").should("not.exist");

    cy.get("#menuButton").click();
    cy.scrollTo("bottom");
    cy.get("#menuButton").click();

    cy.get("#search-videos").should("be.visible").clear();
    cy.scrollTo("bottom");
  });
});
