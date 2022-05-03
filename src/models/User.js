const sequelize = require('sequelize');
const db = require('../database/db');

const user = db.define('Users',{
    id:{
        type: sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    nome:{
        type: sequelize.STRING,
        allowNull: false,
    },
    senha:{
        type: sequelize.STRING,
        allowNull: false
    }

})

module.exports = user;