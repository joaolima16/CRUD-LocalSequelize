const express = require('express');
const app = express();
const porta = 3000;
const rotas = require('./Routes')

app.use(express.json())
app.use(rotas);

app.listen(porta,(req,res)=>{
    console.log("servidor rodando")
})