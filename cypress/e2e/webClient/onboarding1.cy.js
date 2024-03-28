describe('onboarding', () => {
    it('Onboarding', () => {
        cy.visit("https://app-stage.ind.amsaantours.com/welcome");
        cy.get('[class="ant-checkbox-input"]').click();
        cy.get('button').should('be.visible');
        cy.get('button').click();
        cy.get('.hearing-deaf-button').first().click();
        cy.wait(5000);///last for second variant
        cy.get('button').click();
    })
})