describe("Home Page", () => {
  it("Website successfully loads", () => {
    cy.viewport("iphone-6");
    cy.visit("http://localhost:3000/");
  });
});
