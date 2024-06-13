describe("Login and logout", () => { 
   it("Logowanie i wylogowanie z własnym poleceniem logowania", () => {
    cy.visit("https://www.edu.goit.global/account/login"); 
       cy.login("testowyqa@qa.team", "QA!automation-1"); 
       cy.logout();
  }); 
});