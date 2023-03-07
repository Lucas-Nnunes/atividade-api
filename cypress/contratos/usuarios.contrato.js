import { join } from 'cypress/types/bluebird';

const Joi = require ('Joi')

const usuariosSchma = Joi.object({
    quantidade: Joi.number(),
    usuarios: Joi.array().usuarios({
        nome: Joi.string(),
        email: Joi.string(),
        password: Joi.string(),
        adminstrador: Joi.string(),
        _id: Joi.string()
    })
})
        


export default usuariosSchma;