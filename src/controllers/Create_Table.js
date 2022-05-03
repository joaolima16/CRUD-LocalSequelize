const sequelize = require('sequelize');

const database = require("../database/db");
const user = require("../models/User");

const Table = async () => {
    try {
    const resultado = await user.sync({ force:false});
    console.log(resultado);
  } catch (error) {
    console.log("o erro foi" + error);
  }
};

module.exports = Table;