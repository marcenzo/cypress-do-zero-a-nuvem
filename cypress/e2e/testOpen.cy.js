///<reference types="cypress" />
describe('Teste de abertura do site', () => {
    it('Visita o site', () => {
        cy.visit('https://www.google.com/');
    });

});
