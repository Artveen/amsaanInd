import authorizationPage from '../../support/pages/admin/authorizationPage'
import authorizationCredentials from '../../fixtures/adminPanel/authorizationCredentials.json'

describe('Test suite for authorization',() => {
  describe('Negative scenarios',()=>{
    it('Login with short email',()=>{
      authorizationPage.visit();
      authorizationPage.lowerBoundValueLogin(authorizationCredentials.shortEmail, authorizationCredentials.shortPassword)
    })
    it('Login with long email',()=>{
      authorizationPage.visit();
      authorizationPage.upperBoundValueLogin(authorizationCredentials.longEmail, authorizationCredentials.longPassword);
    })
    it.only('Login with repeatable email',()=>{
      authorizationPage.visit();
      authorizationPage.repeatableEmail(authorizationCredentials.repeatableEmail, authorizationCredentials.password);
    })
  })
  describe('Positive scenarios',()=>{
    it('Success authorization',()=>{
      authorizationPage.visit();
      authorizationPage.successLogin(authorizationCredentials.email, authorizationCredentials.password)
    })
  })
})