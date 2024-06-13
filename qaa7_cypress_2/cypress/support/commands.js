// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (email, password) => {
  cy.get("#user_email").type(email);
  cy.get("#user_password").type(password);
  cy.get('.eckniwg2').click();
  // cy.get('#open-navigation-menu-mobile').click();
  // cy.get(':nth-child(8) > .next-bve2vl').click();
});

Cypress.Commands.add("logout", () => {
  cy.get('#open-navigation-menu-mobile').click();
  cy.get(':nth-child(9) > .next-bve2vl').click();
});

