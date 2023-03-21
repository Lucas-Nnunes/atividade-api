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

Cypress.Commands.add('Cadastrar', (nome, email, password, administrador)=>{
cy.request({
    method: 'POST',
    url: 'usuarios',
    failOnStatusCode: false,
    body: {
        'nome':nome,
        'email':email,
        'password': password,
        'administrador': administrador
    }

})
})

Cypress.Commands.add('Editar', (nome, email, password, administrador, id)=>{
cy.request({
    method: 'PUT',
    failOnStatusCode: false,
    url: 'usuarios/1Mi7pjZBRyX05QUS',
    'nome': nome,
    'email': email, 
    'password': password,
    'administrador': administrador,
    'id': id
    
})
})
