//chamando modulos express, cors e mongoose
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const department_controller = require('./department_controller');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//conectando ao banco de dados MongoDB
mongoose.connect("mongodb+srv://john_gerber:john_gerber@cluster0.a6npf.mongodb.net/aplicacao_http?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Banco de dados conectado!");
}).catch((err) => {
    console.log("Falha na conexao ao banco de dados: " + err);
});

app.use('/departments', department_controller)

app.listen(3000);