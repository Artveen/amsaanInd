class authorizationPage{
    visit(){
        cy.visit('https://admin-stage.ind.amsaantours.com/auth/login')
    }
    getLoginField(){
        return cy.get('[id="login_email"]');
    }
    getPasswordField(){
        return cy.get('[id="login_password"]');
    }
    getLoginButton(){
        return cy.get('[type="submit"]');
    }
    successLogin(email, password){
        cy.log("Success login with correct credentials")

        this.getLoginField().type(email);
        this.getPasswordField().type(password);
        this.getLoginButton().click();
    }
    lowerBoundValueLogin(shortEmail, shortPassword){
        cy.log("Check the validation using test design technique boundary values lower boundary")
        this.getLoginField().type(shortEmail);
        this.getPasswordField().type(shortPassword);
        this.getLoginButton().click();
    }
    upperBoundValueLogin(longEmail, longPassword){
        cy.log("Check the validation using test design technique boundary values upper boundary")
        this.getLoginField().type(longEmail);
        this.getPasswordField().type(longPassword);
        this.getLoginButton().click();
    }
}export default new authorizationPage();