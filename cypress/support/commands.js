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

Cypress.Commands.add('configuracionInicial', ()=>{

    // Al devolver falso se evita que cypress 
   // muestre que está fallando la prueba
  Cypress.on('uncaught:exception', (err, runnable) => {
      return false
  })

  //Eliminar validación de peticiones

      cy.intercept({resourceType: /xhr|fetch/},{log:false})


})

Cypress.Commands.add('paginaDeInicio', ()=>{
    //ir a la url
    cy.visit('https://qaplatform.n5platform.com/login')
    //cy.visit('https://develop.n5platform.com/login')
})