const sequelize = require('sequelize')
const table = require('../models/User')


const new_User = async(nome,senha)=>{
    const usuario = await table.create({
        id: "null",
        nome: "teste",
        senha: senha
    })
}
module.exports = new_User;