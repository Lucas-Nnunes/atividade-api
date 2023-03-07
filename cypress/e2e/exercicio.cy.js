/// <reference types="cypress" />

import { internet, password, faker, userName, email} from '@faker-js/faker';


describe('Testes da Funcionalidade Usuários', () => {


     it('Deve validar contrato de usuários', () => {
          
     });


     it('Deve listar usuários cadastrados', () => {
          cy.request({
               method: 'GET',
               url: 'usuarios',
          }).then((response => {
               expect(response.body.usuarios[8].nome).to.equal('Francisco da Silveira')
               expect(response.status).to.equal(200)
          }))
     });




     it('Deve cadastrar um usuário com sucesso', () => {
          cy.request({
               method: 'POST',
               url: 'usuarios',
               failOnStatusCode: false,
               body: {
                     'nome': faker.internet.userName(),
                     email: faker.internet.email(),
                     password: faker.internet.password(),
                    "administrador": "true"
               }
          }).then((response => {
               expect(response.body.message).to.equal('Cadastro realizado com sucesso')
               expect(response.status).to.equal(201)
          }))
     });



     it.only('Deve validar um usuário com email inválido', () => {
          cy.request({
               method: 'POST',
               url: 'usuarios',
               failOnStatusCode: false,
               body: {
                    "nome": "Jose Sorveteiro",
                    "email": "picoles@qa.com.br",
                    "password": "teste",
                    "administrador": "true",
               }
          }).then((response) => {
               expect(response.body.message).to.equal('Este email já está sendo usado')
               expect(response.status).to.equal(400)
          })
     });

     it('Deve editar um usuário previamente cadastrado', () => {
          cy.request({
               method: 'PUT',
               url: 'usuarios/0uxuPY0cbmQhpEz1',
               body: {
                    "nome": "Fulaninhos da Silva",
                    "email": "beltranus@qa.com.br",
                    "password": "teste",
                    "administrador": "true"
               }
          }).then((response) => {
               expect(response.body.message).to.equal('Registro alterado com sucesso')
               expect(response.status).to.equal(200)
          })
     });

     it('Deve deletar um usuário previamente cadastrado', () => {
          cy.request({
               method: 'DELETE',
               url: 'usuarios/LS19t0KHqc1K6jfK'
          }).then((response) => {
               expect(response.body.message).to.equal('Registro excluído com sucesso')
               expect(response.status).to.equal(200)
          })
     });


});
