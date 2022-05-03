const { Router } = require("express");
const Table = require("./controllers/Create_Table");
const rota = Router();
const Tabela = require("./controllers/Create_Table");
const user = require("./models/User");
const sequelize = require("sequelize");
const new_user = require('./controllers/Create_User');
const VerificaUsuario = require('./middlewares/VerificaUsuario')
rota.get("/banco", (req, res) => {
  Tabela();
  res.send({ mensagem: "deu certo" });
});
rota.post("/teste",async(req, res) => {
   const {nome} = req.body;
   const {senha} = req.body;
    new_user(nome,senha);
    const Verifier = await user.findOne({
      where: {
        nome: nome,
        senha: senha,
      },
    });
    VerificaUsuario(Verifier);
    console.log(Verifier);
    res.send({ mensagem: "passei aqui" });

});

module.exports = rota;
