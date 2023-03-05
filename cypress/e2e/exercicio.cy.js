/// <reference types="cypress" />


describe('Testes da Funcionalidade Usuários', () => {


    it('Deve validar contrato de usuários', () => {
     ///
    });


    it('Deve listar usuários cadastrados', () => {
     cy.request({
          method: 'GET',
          url: 'usuarios',
     }).then((response => {
          expect(response.body.usuarios[6].nome).to.equal('Lucas')
          expect(response.status).to.equal(200)
     }))
    });




    it('Deve cadastrar um usuário com sucesso', () => {
         cy.request({
          method: 'POST',
          url: 'usuarios',
          body: {
               "nome": "Ricardinho Valentim",
               "email": "tentativa2@qa.com.br",
               "password": "teste",
               "administrador": "true"
             }
         }).then((response =>{
          expect(response.body.message).to.equal('Cadastro realizado com sucesso')
          expect(response.status).to.equal(201)
         }))
    });



    it('Deve validar um usuário com email inválido', () => {
         cy.request({
          method:'POST',
          url:'usuarios',
          failOnStatusCode: false,
          body: {
               "nome": "Jose Sorveteiro",
               "email": "picoles@qa.com.br",
               "password": "teste",
               "administrador": "true",
             }
         }).then((response)=>{
          expect(response.body.message).to.equal('Este email já está sendo usado')
          expect(response.status).to.equal(400)
         })
    });

    it('Deve editar um usuário previamente cadastrado', () => {
     cy.request({
          method:'PUT',
          url:'usuarios/0uxuPY0cbmQhpEz1',
          body:{
               "nome": "Fulaninha da Silva",
               "email": "beltrano@qa.com.br",
               "password": "teste",
               "administrador": "true"
             }
     }).then((response)=>{
          expect(response.body.message).to.equal('Registro alterado com sucesso')
          expect(response.status).to.equal(200)
     })
    });

    it.only('Deve deletar um usuário previamente cadastrado', () => {
        cy.request({
          method: 'DELETE',
          url: 'usuarios/vjhZh35lKvhgM5Ye'
        }).then((response)=>{
          expect(response.body.message).to.equal('Registro excluído com sucesso')
          expect(response.status).to.equal(200)
        })
    });


});
