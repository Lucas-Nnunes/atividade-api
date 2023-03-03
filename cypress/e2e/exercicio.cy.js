/// <reference types="cypress" />

describe('Testes da Funcionalidade Usuários', () => {

    beforeEach(() => {
        
    });

    it('Deve validar contrato de usuários', () => {
     ///
    });

    it('Deve listar usuários cadastrados', () => {
     cy.request({
          method: 'GET',
          url: 'usuarios',
          body: {
               "quantidade": 3,
               "usuarios": [
                 {
                   "nome": "Fulano da Silva",
                   "email": "beltrano@qa.com.br",
                   "password": "teste",
                   "administrador": "true",
                   "_id": "0uxuPY0cbmQhpEz1"
                 }
               ]
             }
     })
    });

    it('Deve cadastrar um usuário com sucesso', () => {
         cy.request({
          method:'POST',
          url:'usuarios',
          body: {
               "nome": "João Caetano",
               "email": "fulaninha@qa.com.br",
               "password": "teste",
               "administrador": "true"
             }
         }).then((response)=>{
          expect(response.status).to.equal(201),
          expect(response.body.message).to.equal("Cadastro realizado com sucesso")
         })
    });

    it('Deve validar um usuário com email inválido', () => {
         cy.request({
          method:'GET',
          url:'usuarios',
          body: {
               "nome": "Jose Sorveteiro",
               "email": "picole@qa.com.br",
               "password": "teste",
               "administrador": "true",
               "_id": "8QQr5mjYMYXqfS5G"
             }
         }).then((response)=>{
          expect(response.status).to.equal(200)
         })
    });

    it('Deve editar um usuário previamente cadastrado', () => {
         //TODO: 
    });

    it('Deve deletar um usuário previamente cadastrado', () => {
        //TODO: 
    });


});
